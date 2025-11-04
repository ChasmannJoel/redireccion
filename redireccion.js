// redireccion.js - Script para redirigir desde Vercel a tu servidor
const express = require('express');
const app = express();

// Puerto que usa Vercel (por defecto process.env.PORT o 3000)
const PORT = process.env.PORT || 3000;

// URL de tu servidor
const SERVER_URL = 'http://148.230.72.182:3068/whatsapp';

// Middleware para logs
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Ruta principal - redirección directa
app.get('/', (req, res) => {
  console.log(`Redirigiendo a: ${SERVER_URL}`);
  res.redirect(302, SERVER_URL);
});

// Ruta /whatsapp - por si alguien la llama directamente
app.get('/whatsapp', (req, res) => {
  console.log(`Redirigiendo desde /whatsapp a: ${SERVER_URL}`);
  res.redirect(302, SERVER_URL);
});

// Ruta de salud para verificar que el servicio está activo
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    redirect_url: SERVER_URL,
    message: 'Servicio de redirección activo'
  });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  console.log(`Ruta no encontrada: ${req.originalUrl} - Redirigiendo a servidor`);
  res.redirect(302, SERVER_URL);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor de redirección activo en puerto ${PORT}`);
  console.log(`🔗 Redirigiendo todas las peticiones a: ${SERVER_URL}`);
  console.log(`💚 Health check disponible en: /health`);
});

module.exports = app;
