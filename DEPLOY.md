# Deploy ASCAD LATAM en DigitalOcean

## 1. En tu Droplet (primera vez)
```bash
# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar Nginx
sudo apt install nginx -y

# Instalar Certbot (SSL gratis)
sudo apt install certbot python3-certbot-nginx -y
```

## 2. Clonar y buildear
```bash
git clone https://github.com/tu-usuario/ascadlatam.git /var/www/ascadlatam
cd /var/www/ascadlatam
npm install
npm run build
# Genera la carpeta dist/ con todo el sitio optimizado
```

## 3. Configurar Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/ascadlatam
sudo ln -s /etc/nginx/sites-available/ascadlatam /etc/nginx/sites-enabled/
sudo nginx -t        # Verificar que no hay errores
sudo systemctl reload nginx
```

## 4. SSL con Let's Encrypt (gratis)
```bash
sudo certbot --nginx -d ascadlatam.org -d www.ascadlatam.org
# Seguir las instrucciones. Luego descomentar el bloque HTTPS en nginx.conf
sudo systemctl reload nginx
```

## 5. Deploy futuro (cuando hagas cambios)
```bash
cd /var/www/ascadlatam
git pull
npm run build
sudo systemctl reload nginx
```

## 6. Formspree (formularios)
1. Ir a https://formspree.io y crear cuenta gratuita
2. Crear un formulario → copiar el ID (ej: xpzgkrqb)
3. Reemplazar `YOUR_FORM_ID` en SolicitudView.vue y ContactoView.vue
4. Reemplazar `YOUR_CONTACT_ID` en ContactoView.vue
5. Hacer npm run build de nuevo
