import React from "react";

export const useProxy = (props) => {
   
	//filling type list
	async function typeListPr() {
         try{
        const fillTypes = await fetch("http://localhost:2000/types");
		const typesAsArray = await fillTypes.json();
		return typesAsArray;
    } catch (error){
        console.log(error);
        return "Can't get list of types"
    }
		
	}

	//filling products list
	async function productListPr() {
        try{
            const fillProducts = await fetch("http://localhost:2000/products");
		    const productsAsArray = await fillProducts.json();
		    return productsAsArray;
        } catch(error){
            console.log(error);
            return "Can't get list of products"
        }
		
	}

	//adding new product
	async function addProductPr(newProduct) {
		// console.log(newProduct);
		const response = await fetch("http://localhost:2000/addProduct", {
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

    return { typeListPr: typeListPr, addProductPr: addProductPr, productListPr: productListPr };
};
