-- Conecta los inserts en `solicitudes` y `contactos` con la Edge Function
-- `notify-submission`, sin pasar por la UI manual de "Triggers" del dashboard
-- (que pide elegir una función de Postgres ya creada, no una URL).
--
-- pg_net permite llamar HTTP desde una función de Postgres.
create extension if not exists pg_net;

-- Antes de correr el resto de este archivo, guardar UNA SOLA VEZ un secreto
-- compartido en Vault (inventar cualquier string largo y random, no avisarlo
-- por chat). Este secreto nunca queda en texto plano en el repo:
--
--   select vault.create_secret('UN-STRING-LARGO-Y-RANDOM-QUE-INVENTES', 'webhook_shared_secret');
--
-- Ese mismo valor hay que pegarlo también como secret `WEBHOOK_SECRET` en
-- Supabase Dashboard > Edge Functions > notify-submission > Secrets.

create or replace function public.notify_submission()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  shared_secret text;
begin
  select decrypted_secret into shared_secret
  from vault.decrypted_secrets
  where name = 'webhook_shared_secret';

  perform net.http_post(
    url := 'https://mclztptxzwbdlvfedcgw.supabase.co/functions/v1/notify-submission',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', shared_secret
    ),
    body := jsonb_build_object('table', TG_TABLE_NAME, 'record', row_to_json(NEW))
  );
  return NEW;
end;
$$;

drop trigger if exists trg_notify_solicitud on solicitudes;
create trigger trg_notify_solicitud
  after insert on solicitudes
  for each row execute function public.notify_submission();

drop trigger if exists trg_notify_contacto on contactos;
create trigger trg_notify_contacto
  after insert on contactos
  for each row execute function public.notify_submission();
