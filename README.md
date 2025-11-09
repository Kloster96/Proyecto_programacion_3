# 📝 Gestor de Tareas

Aplicación web full stack para la gestión y seguimiento de tareas. Permite a administradores crear, asignar y controlar tareas; y a los usuarios visualizarlas, actualizarlas y completarlas de forma colaborativa.

---

## 🌍 Deploy (Producción)

El proyecto está desplegado en servicios gratuitos:

| Servicio | Uso | URL |
|--------|------|------|
| **Frontend (React + Vite)** | Vercel | https://frontend-gestorde-tareas-mrgc9wnos-kloster96s-projects.vercel.app/ |
| **Backend (Node + Express)** | Render | https://backend-gestordetareas.onrender.com |

> 🕒 **Importante:**  
> El backend en Render usa un plan gratuito, lo que significa que **se suspende por inactividad**.  
> Por eso, **la primera carga puede tardar entre 10 y 20 segundos** en responder.  
> Después funciona normalmente.

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

### Administrador:
- Crear, actualizar y eliminar tareas
- Asignar miembros
- Descargar reportes en Excel
- Ver estadísticas y dashboard
- Ver todos los usuarios

### Usuario:
- Ver sus tareas asignadas
- Marcar checklist de tareas
- Consultar detalles y archivos adjuntos

---

## 🔐 Registro con token de administrador

Durante el registro, un usuario puede ingresar un token especial (`adminInviteToken`) para obtener permisos de administrador.

> 📌 Token por defecto en `.env`:
ADMIN_INVITE_TOKEN=4588944

yaml
Copy code

---

## 🧪 Funcionalidades destacadas

- ✅ Creación de tareas con prioridad, fecha y miembros
- 🧑‍🤝‍🧑 Selector visual de usuarios con avatar
- 📂 Adjuntar archivos con previsualización
- 📊 Dashboard con estadísticas dinámicas
- 📁 Exportación a Excel (usuarios y tareas)
- 📆 Fechas formateadas en español (Day.js)
- 🌐 Rutas protegidas por roles (admin / usuario)

---

## ⚙️ Instalación local

```bash
# Clonar el proyecto
git clone https://github.com/Kloster96/Proyecto_programacion_3.git
cd Proyecto_programacion_3

# Instalar dependencias del backend
cd backend
npm install
Crear .env en backend:

ini
Copy code
MONGO_URI=<tu URI de MongoDB>
JWT_SECRET=<clave secreta>
PORT=3000
ADMIN_INVITE_TOKEN=4588944
bash
Copy code
# Ejecutar backend
npm run dev
bash
Copy code
# Instalar dependencias del frontend
cd frontend/Gestor-De-Tareas
npm install

# Ejecutar frontend
npm run dev
⚠️ Aviso
La base de datos puede tardar unos segundos en activarse si estuvo inactiva (plan gratuito de MongoDB Atlas).
Si aparece un error al principio, esperar unos segundos y recargar.

👨‍💻 Autor
Luciano Kloster
