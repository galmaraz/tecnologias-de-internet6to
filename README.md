# tecnologias-de-internet6to

API RESTful desarrollada con **Node.js**, **TypeScript** y **MongoDB**, que permite administrar clientes del ISP (CRUD). Incluye conexión a MongoDB y está lista para integrarse con el frontend.

---

## 📂 Estructura del proyecto

src/
├── config/ # Configuración (DB, dotenv)
├── controllers/ # Lógica de negocio de los endpoints
├── routes/ # Rutas de la API
├── models/ # Modelos Mongoose
├── middlewares/ # Middlewares (ej: autenticación)
├── services/ # Servicios auxiliares
├── utils/ # Helpers y utilidades
├── index.ts # Punto de entrada del servidor


---

## ⚙️ Requisitos

- **Node.js** >= 18  
- **npm** >= 9  
- **Docker** (para MongoDB, opcional si tienes MongoDB instalado localmente)  
- **MongoDB** (contenedor Docker o instalación local)  

---

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd backend


Instalar dependencias:

npm install

Crear archivo .env en la raíz del proyecto con el contenido:

PORT=4000
MONGO_URI=mongodb://localhost:27017/sis_isp
JWT_SECRET=mi_clave_super_segura


Si usas Docker para MongoDB, asegúrate de que el contenedor esté corriendo:

docker ps
# Debe aparecer algo como:
# CONTAINER ID  IMAGE      PORTS
# 1f405a381997  mongo:7.0  0.0.0.0:27017->27017/tcp

🚀 Ejecutar el servidor
Mac / Linux
npm run dev

Windows (PowerShell o CMD)
npm run dev