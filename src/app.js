import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`a la escucha en el puerto: ${PORT}`);
});

app.use(express.json());
