const Agenda = require("../models/agenda");

const crearContacto = async (req, res) => {
  const { nombre, apellido, provincia, telefono } = req.body;
  try {
    const agenda = await Agenda.find({});
    const estaTelefono = agenda.some((a) => a.telefono === telefono);
    if (estaTelefono) {
      res.json({
        message: "El telefono ya existe",
      });
    } else {
      const nuevoContacto = new Agenda({
        nombre,
        apellido,
        provincia,
        telefono,
      });
      await nuevoContacto.save();
      res.json({
        message: "Contacto creado correctamente",
      });
    }
  } catch (error) {
    res.json({ error });
  }
};

const obtenerContactos = async (req, res) => {
  try {
    const contactos = await Agenda.find({});
    res.json({
      contactos,
    });
  } catch (error) {
    res.json({ error });
  }
};

const editarContacto = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, provincia, telefono } = req.body;
  try {
    const contactoEditado = await Agenda.findByIdAndUpdate(id, {
      nombre,
      apellido,
      provincia,
      telefono,
    });
    await contactoEditado.save();
    res.json({
      message: "Contacto editado correctamente!",
    });
  } catch (error) {
    res.json(error);
  }
};

const borrarContacto = async (req, res) => {
  const { id } = req.params;
  try {
    const contactoBorrado = await Agenda.findByIdAndDelete(id);
    res.json({
      contactoBorrado,
    });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  crearContacto,
  obtenerContactos,
  editarContacto,
  borrarContacto,
};
