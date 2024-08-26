var path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

var staticPath = path.join(__dirname, "/build");
app.use(express.static(staticPath));

app.get("/types", function (req, res) {
  const types = allTypes();
  res.send(types);
});

app.get("/products", function (req, res) {
  const products = allProducts();
  res.send(products);
});

//adding new product
app.post("/addProduct", function (req, res) {
  //getting a product from a server - in the body of POST method
  const savedProduct = req.body;
  //   console.log(req.body);
  //   console.log("product from server " + savedProduct);

  const productIndex = arrayOfProducts.findIndex((currProduct) => {
    //checking if the product already exists
    if (currProduct.productName === savedProduct.productName) {
      return true;
    } else {
      return false;
    }
  });
  //if the product doesn't exist (new product) - save the product to the array.
  if (productIndex === -1) {
    arrayOfProducts.push(savedProduct);
  }

  res.send({ result: "OK" });
});

function allTypes() {
  return ["Obst", "Gemuese", "Milch", "Fleisch"];
}

function allProducts() {
  return [
    {
      productName: "Kaese 1",
      productType: "Milch",
      productImage: null,
      productPrise: "1.5",
    },
    {
      productName: "Kaese 2",
      productType: "Milch",
      productImage: null,
      productPrise: "1.7",
    },
    {
      productName: "Kaese 3",
      productType: "Milch",
      productImage: null,
      productPrise: "2.2",
    },
    {
      productName: "Wurst 1",
      productType: "Fleisch",
      productImage: null,
      productPrise: "2.5",
    },
    {
      productName: "Wurst 2",
      productType: "Fleisch",
      productImage: null,
      productPrise: "1.8",
    },
    {
      productName: "Wurst 3",
      productType: "Fleisch",
      productImage: null,
      productPrise: "1.4",
    },
    {
      productName: "Obst 1",
      productType: "Obst",
      productImage: null,
      productPrise: "0.8",
    },
    {
      productName: "Obst 2",
      productType: "Obst",
      productImage: null,
      productPrise: "1.3",
    },
    {
      productName: "Obst 3",
      productType: "Obst",
      productImage: null,
      productPrise: "2.4",
    },
    {
      productName: "Gemuese 1",
      productType: "Gemuese",
      productImage: null,
      productPrise: "1.8",
    },
    {
      productName: "Gemuese 2",
      productType: "Gemuese",
      productImage: null,
      productPrise: "1.4",
    },
    {
      productName: "Gemuese 3",
      productType: "Gemuese",
      productImage: null,
      productPrise: "1.5",
    },
  ];
}

const arrayOfProducts = allProducts();

app.listen(process.env.PORT || 2000, function () {
  console.log("Server started on port: " + process.env.PORT);
});
