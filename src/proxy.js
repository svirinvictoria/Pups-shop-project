// import React from "react";

// //filling type list
// export async function typeListPr(){
//     const fillTypes = await fetch("http://localhost:2000/types");
//     const typesAsArray = await fillTypes.json();
//     return typesAsArray;
// }

// //filling products list
// export async function productListPr(){
//     const fillProducts = await fetch("http://localhost:2000/products");
//     const productsAsArray = await fillProducts.json();
//     return productsAsArray;
// }

// //adding new product
// export async function addProductPr(newProduct){
//     // console.log(newProduct);
//    const response = await fetch("http://localhost:2000/addProduct", {
// 			method: "POST",
// 			headers: {
// 				"Content-type": "application/json",
// 			},
//             body: JSON.stringify(newProduct),
// 		}); 

//         const openResponse = await response.json();
//         console.log(openResponse);
//         return openResponse;
// }