// import kaese from "./src/img/kaese.jpg";

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
  return ["Obst", "Gemüse", "Milch", "Fleisch"];
}

function allProducts() {
  return [
    {
      productName: "Käse",
      productType: "Milch",
      image: "/img/kaese.jpg",
      productPrise: "1.5",
    },
    {
      productName: "Milch",
      productType: "Milch",
      image: "/img/milch.jpg",
      productPrise: "1.7",
    },
    {
      productName: "Joghurt",
      productType: "Milch",
      image: "/img/joghurt.jpg",
      productPrise: "2.2",
    },
    {
      productName: "Würstchen",
      productType: "Fleisch",
      image: "/img/wuerstchen.jpg",
      productPrise: "2.5",
    },
    {
      productName: "Wurst",
      productType: "Fleisch",
      image: "/img/wurst.jpg",
      productPrise: "1.8",
    },
    {
      productName: "Bacon",
      productType: "Fleisch",
      image: "/img/bacon.jpg",
      productPrise: "1.4",
    },
    {
      productName: "Äpfel",
      productType: "Obst",
      image: "/img/aepfel.jpg",
      productPrise: "0.8",
    },
    {
      productName: "Birnen",
      productType: "Obst",
      image: "/img/birne.jpg",
      productPrise: "1.3",
    },
    {
      productName: "Weintrauben",
      productType: "Obst",
      image: "/img/weintrauben.jpg",
      productPrise: "2.4",
    },
    {
      productName: "Kartoffeln",
      productType: "Gemüse",
      image: "/img/potato.jpg",
      productPrise: "1.8",
    },
    {
      productName: "Tomaten",
      productType: "Gemüse",
      image: "/img/tomato.jpg",
      productPrise: "1.4",
    },
    {
      productName: "Zwiebeln",
      productType: "Gemüse",
      image: "/img/onion.jpg",
      productPrise: "1.5",
    },
  ];
}

const arrayOfProducts = allProducts();

app.listen(process.env.PORT || 2000, function () {
  console.log("Server started on port: " + process.env.PORT);
});
