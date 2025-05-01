import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.listen(8081, () => {
  console.log("Server started on port 8081");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 34 },
    { id: 2, name: "Product 2", price: 45 },
    { id: 3, name: "Product 3", price: 50 },
  ];
  res.json(products);
});


