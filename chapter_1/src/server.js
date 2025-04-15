import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

const data = ["james"];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to our backend system...");
});

app.get("/dashboard", (req, res) => {
  console.log("Dashboard route accessed", req.method);
  res.send("Hello! Welcome to our backend system...");
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  newEntry.name === "Randy"
    ? data.push(newEntry.name)
    : res.status(400).json({ message: "Name must be Randy" });

  res.status(201).json({ message: "User created", data });
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
