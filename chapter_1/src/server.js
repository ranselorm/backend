import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(express.json());
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
