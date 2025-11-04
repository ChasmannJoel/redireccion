# Rotador WhatsApp - Servicio de Redirección

Este servicio redirecciona automáticamente todas las peticiones al servidor rotador de WhatsApp.

## 🚀 Despliegue en Vercel

1. Sube esta carpeta a GitHub como repositorio independiente
2. Conecta el repositorio a Vercel
3. Vercel detectará automáticamente que es una aplicación Node.js
4. El servicio estará disponible en tu URL de Vercel

## 🔗 Funcionamiento

- **URL de Vercel** → **http://148.230.72.182:3068/whatsapp**
- Todas las rutas redirigen al servidor principal
- Incluye health check en `/health`

## 📁 Archivos incluidos

- `redireccion.js` - Servidor Express de redirección
- `package.json` - Dependencias (solo Express)
- `vercel.json` - Configuración de Vercel
- `.gitignore` - Archivos a ignorar

## 🛠️ Configuración

El servidor principal debe estar activo en:
`http://148.230.72.182:3068/whatsapp`

## 📊 Logs

El servicio registra todas las redirecciones con timestamp para monitoreo.

## 🚀 Instrucciones de despliegue

1. **Subir a GitHub:**
   ```bash
   cd redirect-vercel
   git init
   git add .
   git commit -m "Initial commit - Servicio de redirección"
   git remote add origin https://github.com/TU_USUARIO/whatsapp-redirect.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ve a vercel.com
   - New Project
   - Selecciona el repositorio
   - Deploy

3. **¡Listo!** Tu URL de Vercel redirigirá automáticamente al rotador.