import express from "express";
import cors from "cors"
import rutaRecetas from "./routes/recetas.js";
import rutaIngredientes from "./routes/ingredientes.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`a la escucha en el puerto: ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use("/recetas",rutaRecetas);
app.use("/ingredientes", rutaIngredientes)
