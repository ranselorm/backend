// server.js
import express from "express";

const app = express();
const PORT = 5000;

const data = ["james"];

// Built-in JSON middleware
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
  console.log(newEntry);
  data.push(newEntry.name);
  res.status(201).json({ message: "User created", data });
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
