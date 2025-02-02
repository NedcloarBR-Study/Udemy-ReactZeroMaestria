const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if(!name) {
    return res.status(422).json({ message: "O campo nome é obrigatório" });
  }

  console.log(name);
  console.log(price);

  res.status(201).json({ message: `O produto ${name} foi criado com sucesso!` });
});

app.listen(3000);