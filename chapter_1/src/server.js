import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8000;

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

// app.get("/dashboard", (req, res) => {
//   console.log("Dashboard route accessed", req.method);
//   res.send("Hello! Welcome to our backend system...");
// });

// app.get("/api/data", (req, res) => {
//   res.send(data);
// });

// app.post("/api/data", (req, res) => {
//   const newEntry = req.body;
//   newEntry.name === "Randy"
//     ? data.push(newEntry.name)
//     : res.status(400).json({ message: "Name must be Randy" });

//   res.status(201).json({ message: "User created", data });
// });

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
