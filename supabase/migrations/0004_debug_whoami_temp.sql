-- TEMPORAL: solo para diagnosticar por qué el insert vía REST API
-- (PostgREST) rechaza con error de RLS pese a que la policy y los grants
-- son correctos cuando se prueba con `set role anon` directo en SQL.
-- Borrar esta función después de terminar el diagnóstico
-- (DROP FUNCTION public.debug_whoami();).
create or replace function public.debug_whoami()
returns table(current_role_name text, session_user_name text, jwt_claims text)
language sql
security invoker
as $$
  select current_user, session_user, current_setting('request.jwt.claims', true);
$$;

grant execute on function public.debug_whoami() to anon;
