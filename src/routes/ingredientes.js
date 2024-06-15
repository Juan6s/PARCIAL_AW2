import { Router } from "express";
import { LeerArchivo, AddArchivo, NOMBRES_ARCHIVOS } from "../archivos.js";

const rutaIngredientes = Router();

rutaIngredientes.get("/", function (req, res) {
  const ingredientes = LeerArchivo(NOMBRES_ARCHIVOS.INGREDIENTES);
  res.send(ingredientes);
});

rutaIngredientes.post("/", function (req, res) {
    const body = req.body;
    console.log(body)
    AddArchivo(NOMBRES_ARCHIVOS.INGREDIENTES, body)
    res.sendStatus(200)
});


export default rutaIngredientes;
