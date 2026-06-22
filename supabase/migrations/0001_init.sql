-- ASCAD LATAM: esquema inicial de Supabase
-- Correr una sola vez en el SQL Editor del proyecto.

create table if not exists certified_professionals (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  certification_code text not null,
  country text not null,
  certified_at date not null default current_date,
  status text not null default 'active' check (status in ('active', 'revoked')),
  created_at timestamptz not null default now()
);

create table if not exists solicitudes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  certification_code text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  city text not null,
  document_id text not null,
  birth_date date not null,
  -- Campos dinámicos por nivel: titulo, institucion, horas_formacion,
  -- horas_experiencia, horas_entrenamiento, horas_practica, horas_consejero,
  -- horas_supervision, horas_recibida, anios_recuperacion (según corresponda).
  details jsonb not null default '{}',
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected'))
);

create table if not exists contactos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  email text not null,
  pais text,
  asunto text,
  mensaje text not null,
  status text not null default 'new'
);

create index if not exists certified_professionals_status_idx on certified_professionals (status, certified_at desc);

alter table certified_professionals enable row level security;
alter table solicitudes enable row level security;
alter table contactos enable row level security;

-- Lectura pública solo de certificaciones activas (para la sección
-- "Profesionales certificados" en /certificaciones). Sin policy de
-- insert/update/delete para anon: las altas las hace el equipo desde
-- el Table Editor.
create policy "public read active certifications" on certified_professionals
  for select using (status = 'active');

-- Cualquiera puede insertar una solicitud o un contacto desde el
-- formulario público, pero nadie puede leer/editar/borrar filas ajenas
-- (sin policy de select/update/delete para anon = denegado por RLS).
create policy "anyone can submit a solicitud" on solicitudes
  for insert with check (true);

create policy "anyone can submit a contacto" on contactos
  for insert with check (true);
