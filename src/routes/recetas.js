import { Router } from "express";
import { LeerArchivo, NOMBRES_ARCHIVOS } from "../archivos.js";

const rutaRecetas = Router();

rutaRecetas.get("/", function (req, res) {
  const recetas = LeerArchivo(NOMBRES_ARCHIVOS.RECETAS);
  const ingredientes = LeerArchivo(NOMBRES_ARCHIVOS.INGREDIENTES);

  const recetasCompletada = recetas.map((receta) => {
    receta.ingredientes = receta.ingredientes.map((ingrediente) => {
      return {
        ...ingrediente,
        nombre: econtrarNombreIngrediente(
          ingrediente.idIngrediente,
          ingredientes
        ),
      };
    });
    return receta;
  });

  res.send(recetasCompletada);
});

function econtrarNombreIngrediente(id, ingredientes) {
  const ingrediente = ingredientes.find((ingrediente) => {
    return ingrediente.id === id;
  });

  return ingrediente.nombre;
}

export default rutaRecetas;
