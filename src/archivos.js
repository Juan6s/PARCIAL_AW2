import fs from "fs";

export const NOMBRES_ARCHIVOS = {
  INGREDIENTES: "ingredientes.json",
  RECETAS: "recetas.json",
};

export function LeerArchivo(nombreArchivo) {
  const archivo = fs.readFileSync(`./data/${nombreArchivo}`);
  return JSON.parse(archivo.toString());
}
