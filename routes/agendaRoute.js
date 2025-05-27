const express = require("express");
const {
  crearContacto,
  obtenerContactos,
  editarContacto,
  borrarContacto,
} = require("../controllers/agendaController");
const router = express.Router();

router
  .post("/crear", crearContacto)
  .get("", obtenerContactos)
  .put("/editar/:id", editarContacto)
  .delete("/borrar/:id", borrarContacto);

module.exports = router;
