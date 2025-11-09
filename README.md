# 📝 Gestor de Tareas

Aplicación web full stack para la gestión y seguimiento de tareas. Permite a administradores crear, asignar y controlar tareas; y a los usuarios visualizarlas, actualizarlas y completarlas de forma colaborativa.

---

## 🚀 Tecnologías utilizadas

### Frontend
- React.js + Vite
- TailwindCSS
- Axios
- React Router DOM
- React Hot Toast
- Day.js
- Heroicons / Lucide

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Multer (para subida de imágenes)
- ExcelJS (para exportar reportes)

---

## 👤 Roles de usuario

- **Administrador**:
  - Crear, actualizar y eliminar tareas
  - Asignar miembros
  - Descargar reportes en Excel
  - Ver estadísticas y dashboard
  - Ver todos los usuarios

- **Usuario**:
  - Ver sus tareas asignadas
  - Marcar checklist de tareas
  - Consultar detalles y archivos adjuntos

---

## 🔐 Registro con token de administrador

Durante el registro, un usuario puede ingresar un token especial (`adminInviteToken`) para obtener permisos de administrador.

> 📌 Token por defecto en `.env`:  
> `ADMIN_INVITE_TOKEN=4588944`

---

## 🧪 Funcionalidades destacadas

- ✅ Creación de tareas con prioridad, fecha y miembros
- 🧑‍🤝‍🧑 Selector visual de usuarios con foto
- 📂 Adjuntar archivos con previsualización de links
- 📊 Estadísticas dinámicas en el dashboard (por estado y prioridad)
- 📁 Exportación a Excel de usuarios y tareas
- 📆 Fechas formateadas en español con Day.js
- 🌐 Rutas protegidas por rol (admin / usuario)

---

## ⚙️ Instalación local

```bash
# Clonar el proyecto
git clone https://github.com/Kloster96/Proyecto_programacion_3.git
cd Proyecto_programacion_3

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd frontend
cd Gestor-De-Tareas
npm install
```
Configurar .env en backend

MONGO_URI=<tu URI de MongoDB>
JWT_SECRET=<clave secreta>
PORT=3000
ADMIN_INVITE_TOKEN=4588944

.ENV Lo deje para que puedan hacer la pruebas, cualquier cosa preguntenmete

🔃 Correr el proyecto
cd backend
npm run dev

cd frontend
npm run dev

Aviso

La base de datos puede tardar unos segundos en activarse si estuvo inactiva,
porque es un plan gratuito de MongoDB Atlas. Si ve un error al principio, espere unos segundos y recargue

🌍 Deploy (Producción)

El proyecto está desplegado gratuitamente usando:

Servicio	Uso	Link
Render	Backend (Node + Express + MongoDB)	https://backend-gestordetareas.onrender.com

Vercel	Frontend (React + Vite)	https://TU-LINK-DE-VERCEL-AQUÍ
[![Deploy Backend](https://img.shields.io/badge/Backend-Render-blue)](https://backend-gestordetareas.onrender.com)
[![Deploy Frontend](https://img.shields.io/badge/Frontend-Vercel-black)](https://TU-LINK-DE-VERCEL-AQUÍ)


🕒 Aviso importante:
Como el backend está corriendo en el plan gratuito de Render, el servidor se pone en modo suspensión cuando no se usa.
Por eso, la primera vez que ingreses puede tardar entre 10 y 20 segundos en responder.
Luego de eso, el rendimiento es normal.

El frontend se encuentra desplegado en Vercel, que permite hacer deploy automático cada vez que hago un push en GitHub.
El backend está en Render, que mantiene el servidor Node.js activo y conectado a la base de datos en MongoDB Atlas.


👨‍💻 Autor

Luciano Kloster
