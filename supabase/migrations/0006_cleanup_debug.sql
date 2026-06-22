-- Limpieza de los artefactos temporales usados para diagnosticar el setup
-- de notificaciones (ver 0004_debug_whoami_temp.sql).
drop function if exists public.debug_whoami();

delete from contactos where nombre in ('Prueba set role', 'Prueba Sistema', 'Prueba Sistema 2', 'Prueba Sistema 3', 'Prueba Final');
