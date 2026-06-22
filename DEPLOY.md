# Deploy de ASCAD LATAM

## Vía oficial: Vercel (automático vía CI/CD)

El pipeline en `.github/workflows/ci.yml` builda el proyecto y lo despliega a Vercel automáticamente:

- **Push a `main`** → deploy a producción (`https://ascadlatam.org`).
- **Pull Request** → deploy preview con URL propia, después de que pasen lint, typecheck, tests unitarios y build.

No se necesita ningún paso manual: alcanza con mergear a `main`.

### Configuración requerida (una sola vez)
En GitHub → Settings → Secrets and variables → Actions, configurar:

| Secret | Descripción |
|--------|--------------|
| `VERCEL_TOKEN` | Token personal de Vercel |
| `VERCEL_ORG_ID` | ID de la organización/equipo en Vercel |
| `VERCEL_PROJECT_ID` | ID del proyecto en Vercel |

Las reglas de rewrite para el SPA están en `vercel.json`.

### Variables de entorno en Vercel
Configurar en el dashboard de Vercel (Project → Settings → Environment Variables):

```env
VITE_FORMSPREE_CONTACT_ID=tu_contact_form_id
VITE_FORMSPREE_SOLICITUD_ID=tu_solicitud_form_id
```

---

## Alternativa: self-hosted con Nginx (DigitalOcean u otro VPS)

Útil si en algún momento se necesita salir de Vercel. Esta vía es manual y **no** está conectada al pipeline de CI/CD.

### 1. En el droplet/VPS (primera vez)
```bash
# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Nginx
sudo apt install nginx -y

# Certbot (SSL gratis)
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Clonar y buildear
```bash
git clone https://github.com/tu-usuario/ascadlatam.git /var/www/ascadlatam
cd /var/www/ascadlatam
npm install
npm run build
# Genera la carpeta dist/ con todo el sitio optimizado
```

### 3. Configurar Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/ascadlatam
sudo ln -s /etc/nginx/sites-available/ascadlatam /etc/nginx/sites-enabled/
sudo nginx -t        # Verificar que no hay errores
sudo systemctl reload nginx
```

### 4. SSL con Let's Encrypt
```bash
sudo certbot --nginx -d ascadlatam.org -d www.ascadlatam.org
# Seguir las instrucciones. Luego descomentar el bloque HTTPS en nginx.conf
sudo systemctl reload nginx
```

### 5. Deploy futuro (cuando hagas cambios)
```bash
cd /var/www/ascadlatam
git pull
npm run build
sudo systemctl reload nginx
```

---

## Formspree (formularios de Contacto y Solicitud)
1. Crear cuenta gratuita en https://formspree.io
2. Crear un formulario → copiar el ID (ej: `xpzgkrqb`)
3. Setear `VITE_FORMSPREE_CONTACT_ID` y `VITE_FORMSPREE_SOLICITUD_ID` (ver `.env.example`)
4. Rebuildear (`npm run build`) o redeployar para que tomen efecto
