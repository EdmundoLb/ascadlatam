# Contribuir a ASCAD LATAM

## Setup

```bash
npm install
cp .env.example .env   # completar con los IDs de Formspree
npm run dev
```

## Flujo de trabajo

1. Crear una rama desde `main` (`feature/...`, `fix/...`).
2. Hacer los cambios. Antes de commitear, asegurate de que pasen:
   ```bash
   npm run lint
   npm run typecheck
   npm run test
   ```
   (`npm run test:all` corre todo eso más los tests E2E.)
3. Commitear siguiendo **Conventional Commits** (lo exige `commitlint` vía Husky):
   ```
   <tipo>(<scope opcional>): <descripción en minúscula, sin punto final>
   ```
   Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

   Ejemplos:
   ```
   feat: agregar selector de idioma al navbar
   fix: corregir overflow del menú móvil en tablets
   docs: actualizar README con scripts de testing
   ```
4. Al hacer `git commit`, Husky corre automáticamente `lint-staged` (ESLint + Prettier sobre los archivos staged) y valida el mensaje con `commitlint`. Si algo falla, corregir y volver a commitear — no usar `--no-verify`.
5. Abrir un Pull Request contra `main`. El workflow de CI (`.github/workflows/ci.yml`) corre lint, typecheck, tests unitarios con coverage, tests E2E y build, y despliega un preview a Vercel automáticamente.
6. Una vez aprobado y mergeado a `main`, el deploy a producción es automático (ver `DEPLOY.md`).

## Convenciones del proyecto

- Composition API con `<script setup>` en todos los componentes/vistas.
- Imágenes nuevas: agregar la fuente a `images/`, sumarla al array de `optimize-images.mjs`, correr `node optimize-images.mjs`, e importar el `.webp` resultante con `import x from '/images/optimized/archivo.webp'` (nunca como string literal — ver `AGENTS.md` para el porqué).
- Textos visibles al usuario: agregar la clave correspondiente en `src/i18n/locales/es.json` **y** `pt.json`, y usar `$t('...')` en el template.
- Ver `AGENTS.md` para el detalle de estructura, diseño y decisiones ya tomadas en el proyecto.
