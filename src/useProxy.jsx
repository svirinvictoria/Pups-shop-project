export const useProxy = (props) => {
  const url = process.env.REACT_APP_URL || "";

  //filling type list
  async function typeListPr() {
    try {
      const fillTypes = await fetch(`${url}/types`);
      const typesAsArray = await fillTypes.json();
      return typesAsArray;
    } catch (error) {
      console.log(error);
      return "Can't get list of types";
    }
  }

  //filling products list
  async function productListPr() {
    try {
      const fillProducts = await fetch(`${url}/products`);
      const productsAsArray = await fillProducts.json();
      return productsAsArray;
    } catch (error) {
      console.log(error);
      return "Can't get list of products";
    }
  }

  //adding new product
  async function addProductPr(newProduct) {
    // console.log(newProduct);
    const response = await fetch(`${url}/addProduct`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const openResponse = await response.json();
    console.log(openResponse);
    return openResponse;
  }

  return {
    typeListPr: typeListPr,
    addProductPr: addProductPr,
    productListPr: productListPr,
  };
};
