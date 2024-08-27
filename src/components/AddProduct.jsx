import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import "./SelectProduct.scss";
// import { typeListPr, addProductPr, productListPr } from "../proxy";
import { useProxy } from "../useProxy"


const AddProduct = (props)=>{
	// const [nameList, setNameList] = useState(["Produktsart", "Obst", "Gemuese", "Milk", "Fleisch"]);

	const [listOfTypes, setListOfTypes] = useState(["Produktsart"]); //list of product types from the server
	const [selectedType, setSelectedType] = useState(""); //selected product type
	const [productName, setProductName] = useState(""); //name of added product
	const [productPrice, setProductPrice] = useState(""); //price of added product
	const [newProduct, setNewProduct] = useState(""); //new product 

	const proxy = useProxy();
	useEffect(() => {
		async function fetchData() {
			const typesArr = await proxy.typeListPr(); //array of strings from server
			setListOfTypes(typesArr);
		}
		fetchData();
	}, []);

	const nameChangeHandler = (event) => {
		setProductName(event.target.value);
	};

	const priceChangeHandler = (event) => {
		setProductPrice(event.target.value);
	};

	const onChangeTypeHandler = (event) => {
		setSelectedType(event.target.value);
	};

	const onDeleteHandler = () => {
		setProductName("");
		setProductPrice("");
		setSelectedType("");
	};

	const onSendProductHandler = async (event) => {
    event.preventDefault();
		const productToAdd = { 
      "productName": productName, 
      "productPrice": productPrice, 
      "selectedType": selectedType 
    }; ;
    const newProduct = await proxy.addProductPr(productToAdd);
    const updatedProductList = await proxy.productListPr(newProduct);
	};

	return (
		<div>
			<div className="border-green product-selection selection-window">
				{/* Adding name of new product */}
				<input value={productName} type="text" placeholder="Produktname" className="field-frame border-green" onChange={nameChangeHandler}></input>
				{/* Adding price of new product */}
				<input value={productPrice} type="text" placeholder="Produktpreis" className="field-frame border-green" onChange={priceChangeHandler}></input>
				{/* Selecting type of new product */}
				<Selector items={listOfTypes} onChangeTypeHandler={onChangeTypeHandler} />

				<div className="button-home">
					<button type="button" className="field-frame btn" onClick={onDeleteHandler}>
						Aufräumen
					</button>
					<button type="submit" onClick={onSendProductHandler} className="field-frame btn">
						Senden
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddProduct;