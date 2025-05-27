# 🗂️ Agenda de Contactos

Este proyecto es una agenda de contactos básica desarrollada con **Node.js**, **Express** y **MongoDB**. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre una colección de contactos.

---

## Instalación

1. **Clonar el repositorio o descomprimir el archivo .zip**

```bash
git clone https://github.com/marcosarias21/reingenio-agenda-db.git
cd reingenio-agenda-db

Instalar dependencias
npm install

Configurar variables de entorno

Crear un archivo .env con el siguiente contenido:

DB=mongodb://localhost:27017/agenda

Ejecutar el servidor
npm run dev

Yo tengo instalado MongoDB Compass , se ejecuta localmente. Para instalarlo, es necesario:

MongoDB Community Server: https://www.mongodb.com/try/download/community-kubernetes-operator. Viene con Compass incluido.
En caso de no: https://www.mongodb.com/products/tools/compass

---

## Endpoints disponibles

GET -> /contactos : Obtiene todos los contactos
POST -> /contactos/crear : crea nuevos contactos
PUT -> /contactos/editar/:id : Obtiene por parametro el id del contacto y lo modifica.
DELETE -> /contactos/borrar/:id : Borrar al contacto , que se envia por parametro su id.

---

### Tecnologías utilizadas
Node.js

Express

MongoDB + Mongoose

Dotenv

```
