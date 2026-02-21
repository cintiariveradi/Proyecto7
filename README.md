# Proyecto 7 – Aplicación Fullstack de Comercio Electrónico (5 Steps Only)

Este proyecto consiste en una aplicación Fullstack de comercio electrónico desarrollada con React, Node.js, Express y MongoDB, que permite a los usuarios explorar un catálogo de productos, registrarse, iniciar sesión, gestionar un carrito de compras y realizar pagos mediante Stripe en modo de pruebas.

La aplicación implementa autenticación y autorización mediante JSON Web Tokens (JWT), protección de rutas privadas en frontend y backend, integración con pasarela de pago (Stripe) y despliegue en producción utilizando Netlify (frontend), Render (backend) y MongoDB Atlas (base de datos).

El proyecto fue desarrollado siguiendo una arquitectura modular tanto en frontend como en backend, aplicando buenas prácticas de seguridad, separación de responsabilidades y manejo de variables de entorno.

---

## Demo

**Frontend (producción):**  
https://5stepsonly.netlify.app

**Backend (producción):**  
https://proyecto7-phez.onrender.com

**API – Listar productos:**  
https://proyecto7-phez.onrender.com/api/product/readall

**Swagger (producción):**  
https://proyecto7-phez.onrender.com/api/docs

**Nota:** Stripe se encuentra configurado en **modo test**.

---

## Tecnologías utilizadas

### Frontend

- React (Vite)
- React Router DOM
- Context API (useContext)
- useReducer (gestión de carrito)
- Axios
- MUI (Material UI)
- CSS personalizado

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- cors
- dotenv
- Stripe (modo test)
- swagger-jsdoc
- swagger-ui-express
- nodemon

### Base de datos

- MongoDB Atlas (producción)

---

## Características principales

### Gestión de productos

- Catálogo dinámico conectado a MongoDB Atlas
- Vista de detalle de producto
- CRUD completo en backend:
  - Crear producto (protegido)
  - Listar todos los productos
  - Obtener producto por ID
  - Obtener producto por número de paso
  - Actualizar producto (protegido)
  - Eliminar producto (protegido)

### Autenticación y autorización

- Registro de usuario
- Inicio de sesión
- Generación de token JWT
- Middleware `requireAuth` en backend
- Protección de rutas privadas en frontend
- Verificación de token
- Perfil de usuario protegido

### Carrito de compras

- Gestión global con Context API + useReducer
- Persistencia en `localStorage`
- Cálculo dinámico de totales
- Eliminación de productos individuales
- Limpieza automática tras pago exitoso

### Pasarela de pago

- Integración con Stripe en modo test
- Creación de sesión de pago en backend
- Redirección a Stripe Checkout
- Rutas:
  - `/checkout`
  - `/checkout/success`
  - `/checkout/cancel`

**Tarjeta de prueba Stripe:**

- `4242 4242 4242 4242`  
- Fecha futura y cualquier CVC válido

---

## Instalación local

### 1) Clonar repositorio


git clone <URL_DEL_REPOSITORIO>
cd Proyecto7


### 2) Backend

cd backend
npm install

Crear archivo .env:
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/5stepsonly
JWT_SECRET=TuSecretoSeguro
STRIPE_SECRET_KEY=TuClaveStripeTest
FRONTEND_URL=http://localhost:5173

Ejecutar:
npm run dev

### 3) Frontend
cd frontend
npm install
Crear archivo .env:
VITE_API_URL=http://localhost:4000

Ejecutar:
npm run dev

### Scripts disponibles

Backend
npm run dev
npm start
Frontend
npm run dev
npm run build
npm run preview

---

## Endpoints disponibles
### Autenticación (/api/auth) 

| Método | Endpoint     | Protegido | Descripción       |
|--------|--------------|-----------|-------------------|
| POST   | /register    | No        | Registrar usuario |
| POST   | /login       | No        | Iniciar sesión    |
| GET    | /verifytoken | Sí        | Verificar token   |

### Productos (/api/product)

| Método | Endpoint          | Protegido | Descripción              |
|--------|-------------------|-----------|--------------------------|
| GET    | /readall.         | NO        | Listar productos         |
| GET    | /readone/:id      | NO        | Obtener producto por ID  |
| GET    | /readbystep/:step | NO        | Obtener producto por paso|
| POST   | /create           | Sí        | Crear producto           |
| PUT    | /update/:id       | Sí        | Actualizar producto      |
| DELETE | /delete/:id       | Sí        | Eliminar producto        |

### Pagos (/api/payments)

| Método | Endpoint                 | Protegido | Descripción                    |
|--------|--------------------------|-----------|--------------------------------|
| POST   | /create-checkout-session |Sí         | Crear sesión de pago en Stripe |


---

## Estructura del proyecto
```Proyecto7/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── paymentController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── paymentRoutes.js
│   ├── seedProducts.js
│   ├── swagger.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.examples
│   └── .gitignore
│
│── frontend/
│   ├── public/
│   │   ├── _redirects
│   │   └── assets/
│   │       ├── faviconCintia.png
│   │   │   ├── herofinal.png
│   │   │   ├── productoHistoria.png
│   │   │   ├── Limpiador.png
│   │   │   ├── Tonico.png
│   │   │   ├── Serum.png
│   │   │   ├── Crema.png
│   │   │   ├── Bloqueador.png
│   │   │   ├── c.png
│   │   │   ├── instagram.svg
│   │   │   ├── tiktok.svg
│   │   │   └── whatsapp.svg
│   ├── src/
│   │   ├── api/
│   │       ├── apiClient.js
│   │   ├── assets/
│   │       ├── faviconCintia.png
│   │   │   ├── herofinal.png
│   │   │   ├── productoHistoria.png
│   │   │   ├── Limpiador.png
│   │   │   ├── Tonico.png
│   │   │   ├── Serum.png
│   │   │   ├── Crema.png
│   │   │   ├── Bloqueador.png
│   │   │   ├── c.png
│   │   │   ├── instagram.svg
│   │   │   ├── tiktok.svg
│   │   │   └── whatsapp.svg
│   │   ├── auth/
│   │       ├── RequiereAuth.jsx
│   │       ├── token.js
│   │   ├── components/
│   │       ├── NavBar.jsx
│   │   ├── context/
│   │       ├── CartContext.jsx
│   │   ├── data/
│   │       ├── products.js
│   │   ├── pages/
│   │       ├── Carrito.jsx
│   │       ├── Checkout.jsx
│   │       ├── CheckoutCancel.jsx
│   │       ├── CheckoutSuccess.jsx
│   │       ├── Home.jsx
│   │       ├── Login.jsx
│   │       ├── Perfil.jsx
│   │       ├── ProductDetail.jsx
│   │       ├── Products.jsx
│   │       ├── Registro.jsx
│   │   ├── styles/
│   │       ├── index.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── theme.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│   └── .gitignore
│   └── eslint.config.js
│   └── index.html
│   └── vite.config.js
└── README.md
│   
└── .gitignore
```

---

## Implementación (resumen técnico)

Modelos:

User
- name
- email (único)
- password (encriptado)

Product
- name
- price
- step
- image
- ingredients
- usage
- user

Seguridad:

- Contraseñas encriptadas con bcryptjs
- JWT con expiración
- Middleware de autorización
- Rutas protegidas en frontend y backend
- Variables de entorno gestionadas con dotenv
- CORS configurado para producción (Netlify)

## Consideraciones técnicas

- La aplicación está configurada como SPA en Netlify mediante el archivo public/_redirects.
- El pago en Stripe está configurado en modo test.
- Después de la redirección externa desde Stripe, puede requerirse una recarga manual en algunos navegadores para restablecer completamente el estado visual, sin afectar el procesamiento del pago.

---

## Autora

Cintia Rivera  
Bootcamp UDD- Desarrollo Web Full Stack – 2026