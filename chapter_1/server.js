import express from "express";
const app = express();
const PORT = 5000;

const data = ["james"];

//middleware
// app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("Hello! Welcome to our backend system...");
});
//route
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
  // const user = data.push(newEntry.name);
  // res.json(user);
  // res.statusCode(201);
  console.log("User created");
});

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
