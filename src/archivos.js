import fs from "fs";

export const NOMBRES_ARCHIVOS = {
  INGREDIENTES: "ingredientes.json",
  RECETAS: "recetas.json",
};

export function LeerArchivo(nombreArchivo) {
  const archivo = fs.readFileSync(`./data/${nombreArchivo}`);
  
  return JSON.parse(archivo.toString());
}

export function AddArchivo(nombreArchivo, registro){
    const json = LeerArchivo(nombreArchivo)
    const lastId = json[json.length - 1].id;
    registro = {id:lastId+1, ...registro}
    
    json.push(registro);
    
    fs.writeFileSync(`./data/${nombreArchivo}`, JSON.stringify(json));
}
