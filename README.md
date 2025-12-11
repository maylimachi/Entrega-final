# 🛒 API de Productos – Express + Firebase

Este proyecto es una API REST construida con **Node.js**, **Express** y **Firebase Firestore**, que permite manejar un catálogo de productos.  
Incluye autenticación mediante login y rutas protegidas con middleware.

---

## 🚀 Tecnologías utilizadas
- Node.js  
- Express  
- Firebase Firestore  
- Middleware de autenticación (JWT)

---

## 📌 Instalación
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/mi-api-products.git
cd mi-api-products
```
### 2️⃣ Instalar dependencias
```bash
npm install
```
### 3️⃣ Configurar variables de entorno
```
Crear un archivo .env en la raíz del proyecto:

FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
JWT_SECRET=tu_clave_secreta
```
### 4️⃣ Configurar Firebase

Antes de ejecutar la API, asegurate de tener un proyecto en Firebase con Firestore habilitado.

Ruta usada en este proyecto:
```
/products (colección)
```
### 5️⃣ Ejecutar el servidor
```
npm run dev
```
## 📁 Estructura del proyecto
```
src/
 ├── config/
 │    └── firebase.config.js
 ├── controllers/
 │    ├── auth.controller.js
 │    └── products.controller.js
 ├── models/
 │    └── products.model.js
 ├── routes/
 │    ├── auth.routes.js
 │    └── products.routes.js
 ├── middlewares/
 │    └── auth.middleware.js
 └── services/
 │    └── products.service.js
 └── index.js
      
```
## 🔐 Autenticación

Antes de usar las rutas protegidas, es necesario hacer login:
```
POST /auth/login

Body:
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
Devuelve un token que deberás enviar en cada petición protegida:
```
Authorization: Bearer <token>
```
## 📦 Rutas de Productos

Todas las rutas de productos requieren autenticación (authMiddleware).

### ▶️ GET /products/

Obtiene todos los productos.

Headers:

Authorization: Bearer <token>

### ▶️ GET /products/:id

Obtiene un producto por su ID interno de Firestore.

### ▶️ POST /products/create

Crea un nuevo producto.

Body ejemplo:
```
{
  "name": "Producto demo",
  "price": 100,
  "category": "General"
}
```
### 🗑️ DELETE /products/:id

Elimina un producto usando el id generado automáticamente por Firestore.

## ✔️ Estado del proyecto

Funcional y listo para integrar en un front-end o sistema interno
