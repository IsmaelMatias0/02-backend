import express from "express";
import Usuario from "./models/Usuario.js";

const app = express();
app.use(express.json());
app.post("/api/usuarios", async (req, res) => {
  try {
    const { gmail, contrasena } = req.body;
    
    // Validar datos
    if (!gmail || !contrasena) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Crear usuario
    const nuevoUsuario = await Usuario.create({ gmail, contrasena });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
});
