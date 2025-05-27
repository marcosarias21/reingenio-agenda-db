const mongoose = require("mongoose");

const agendaSchema = new mongoose.Schema({
  nombre: { type: String },
  apellido: { type: String },
  provincia: { type: String },
  telefono: { type: Number },
});

module.exports = mongoose.model("Agenda", agendaSchema);
