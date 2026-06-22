-- Las políticas de insert público en `solicitudes` y `contactos` no estaban
-- aplicando (RLS las rechazaba con error 42501). Se recrean explícitas para
-- el rol `anon`, por si la causa fue que `to public` no las cubría o se
-- perdieron al experimentar con la UI de Triggers.
drop policy if exists "anyone can submit a solicitud" on solicitudes;
create policy "anyone can submit a solicitud" on solicitudes
  for insert to anon with check (true);

drop policy if exists "anyone can submit a contacto" on contactos;
create policy "anyone can submit a contacto" on contactos
  for insert to anon with check (true);
