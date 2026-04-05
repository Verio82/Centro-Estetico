# 📘 Centro Estético API

API REST para gestionar clientes y citas de un centro estético.
Desplegada en Render y conectada a MongoDB Atlas.

---

## 🚀 Tecnologías

* Node.js + Express
* MongoDB Atlas + Mongoose
* Render (deploy)
* Postman (testing)

---

## ⚙️ Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/Verio82/Centro-Estetico.git
cd Centro-Estetico
npm install
```

Crear archivo `.env` en la raíz del proyecto:

```env
MONGO_URI=mongodb+srv://admin:tucontraseña@cluster0.8vglpjv.mongodb.net/
```

Iniciar servidor:

```bash
npm start
```

---

## 📂 Estructura del proyecto

```
Centro-Estetico/
│
├── index.js            # Punto de entrada del servidor
├── models/             # Modelos Mongoose (Cliente, Cita)
├── routes/             # Rutas de la API
├── package.json        # Dependencias y scripts
└── .env                # Variables de entorno (no subir a GitHub)
```

---

## 🌐 Endpoints

### 👤 Clientes

* **GET /api/clientes** → Lista todos los clientes

* **POST /api/clientes** → Crea un nuevo cliente
  Body:

```json
{
  "nombre": "Vero",
  "email": "vero@example.com",
  "telefono": "1122334455"
}
```

* **PUT /api/clientes/:id** → Actualiza un cliente por ID

* **DELETE /api/clientes/:id** → Elimina un cliente por ID

---

### 📅 Citas

* **GET /api/citas** → Lista todas las citas

* **POST /api/citas** → Crea una nueva cita
  Body:

```json
{
  "clienteId": "idCliente",
  "fecha": "2026-04-05T15:00:00",
  "servicio": "Limpieza facial"
}
```

* **PUT /api/citas/:id** → Actualiza una cita por ID

* **DELETE /api/citas/:id** → Elimina una cita por ID

---

## 🧪 Pruebas con Postman

* Importar la colección de endpoints
* Usar la URL pública:

```
https://centro-estetico-d55l.onrender.com
```

* Probar métodos GET, POST, PUT y DELETE
* Verificar en MongoDB Atlas que los datos se guardan correctamente

---

## 🔒 Seguridad

* No subir el archivo `.env` al repositorio
* Usar usuarios de MongoDB Atlas con rol `readWrite o admin`
* En producción, restringir accesos por IP

---

## 📌 Notas

* Render asigna el puerto automáticamente → no definir `PORT` en `.env`
* MongoDB Atlas debe permitir conexiones externas (en desarrollo)
* Configurar correctamente usuario y permisos en la base de datos

---

## 📈 Futuras mejoras

* Autenticación con JWT
* Validaciones más estrictas con Mongoose
* Documentación automática con Swagger
* Frontend en React para consumir la API

---

## ✨ Autor

Proyecto desarrollado por Verónica Muzzio como práctica de backend y despliegue en la nube para ADA - Desarrollo BackEnd Avanzado Abril 2026.
