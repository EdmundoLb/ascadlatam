-- El gateway de Supabase delante de las Edge Functions exige un header
-- Authorization con un JWT valido (chequeo de plataforma, antes incluso de
-- que el codigo de la funcion se ejecute), independiente del x-webhook-secret
-- que ya usamos para autorizar la llamada a nivel de aplicacion. El trigger
-- no lo mandaba, por eso pg_net recibia 401 UNAUTHORIZED_NO_AUTH_HEADER.
--
-- La anon key no es secreta (ya viaja en el bundle publico del sitio), asi
-- que es segura de pegar directo en este archivo versionado.
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
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbHp0cHR4endiZGx2ZmVkY2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMjI2ODcsImV4cCI6MjA5NzY5ODY4N30.ihSZmyUG7eEOBkrWzI2OGqQEpb60NSmHYPoOP3m1OSk',
      'x-webhook-secret', shared_secret
    ),
    body := jsonb_build_object('table', TG_TABLE_NAME, 'record', row_to_json(NEW))
  );
  return NEW;
end;
$$;
