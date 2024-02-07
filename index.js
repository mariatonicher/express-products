const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());
// definir numero da porta
const port = 3000;
// inciar servidor
app.listen(3000, () => {
  console.log("server is running (express)");
});

const server = express();

server.post("/teste", (req, res) => {
  console.log("teste is running");
});

//create a backend API
let products = [
  {
    id: 1,
    title: "produto 1",
    price: 10.99,
  },
  {
    id: 2,
    title: "produto 2",
    price: 11.0,
  },
  {
    id: 3,
    title: "produto 3",
    price: 12.0,
  },
];

// post schema
const schema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
});

//create rota , get e post
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const { title, price } = req.body;
  const id = products.length + 1;
  const newProduct = {
    id,
    title,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

//read
app.get("/products", (req, res) => {
  res.json(products);
});

//update---- //https://darshan-chauhan.medium.com/crud-create-read-update-and-delete-using-node-js-express-and-react-js-6be05ebcbafe
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;

  if (id >= 0 && id < products.length) {
    products[id] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: " product not found" });
  }
});

//delete products
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;

  if (id >= 0 && id < products.length) {
    const deletedItem = products.splice(id, 1)[0];
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});
