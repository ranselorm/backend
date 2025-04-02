import express from "express";
const app = express();
const PORT = 5000;

//route
app.get("/", (req, res) => {
  res.send("Hello! Welcome to our backend system...");
});

console.log("hello");

app.listen(PORT, () => {
  console.log(`Server has started on: ${PORT}`);
});
