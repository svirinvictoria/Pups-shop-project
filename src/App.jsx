import "./App-styles.scss";
import SelectType from "./components/SelectType";
import AddProduct from "./components/AddProduct";
import { useState, useEffect } from "react";
import ShowCard from "./components/ShowCard";
// import { productListPr, typeListPr } from "./proxy.js";
import { useProxy } from "./useProxy";
import ShowTable from "./components/ShowTable";

function App() {
	const [productList, setProductList] = useState([]); //original array from the server
	const [originalList, setOriginalList] = useState([]); //original array
	const [filteredList, setFilteredList] = useState([]); //array containing only the chosen types of products
	const [typesList, setTypesList] = useState([]); //original array from the server
	const [isClicked, setIsClicked] = useState(true);

	const proxy = useProxy();

	useEffect(() => {
		async function fetchData() {
			// const productsArr = await productListPr(); //array of objects from server
			const productsArr = await proxy.productListPr(); //array of objects from server
			setOriginalList(productsArr);
			setFilteredList(productsArr);

			// const typesInStrings = await typeListPr(); //array of strings from server
			const typesInStrings = await proxy.typeListPr(); //array of strings from server
			const typesArr = typesInStrings.map((currType) => {
				return { typeName: currType, typeStatus: true };
			});
			setTypesList(typesArr);
		}
		fetchData();
	}, []);

	//a callback function in parent
	const updateChoice = (type) => {
		const typesToChange = [...typesList];
		for (let i = 0; i < typesToChange.length; i++) {
			if (typesToChange[i].typeName === type.typeName) {
				if (typesToChange[i].typeStatus === true) {
					typesToChange[i].typeStatus = false;
				} else {
					typesToChange[i].typeStatus = true;
				}
			}
		}
		setTypesList(typesToChange);
	};

	//choosing products that have the same type as chosen type
	useEffect(() => {
		const newArr = [];
		// console.log("1 " + originalList);
		// console.log("2 " + typesList);
		for (let i = 0; i < originalList.length; i++) {
			for (let j = 0; j < typesList.length; j++) {
				if (typesList[j].typeStatus === true) {
					if (originalList[i].productType === typesList[j].typeName) {
						// console.log("3 " + originalList[i].productType);
						// console.log("4 " + typesList[j].typeName);
						newArr.push(originalList[i]);
					}
				}
			}
			// console.log("5" + newArr);
		}
		setFilteredList(newArr);
	}, [typesList]);

	// console.log("2 " + filteredList);
	// console.log("3 " + originalList);

	//sorting products by name
	function compareByName(a, b) {
		if (a.productName < b.productName) {
			return -1;
		}
		if (a.productName > b.productName) {
			return 1;
		}
		return 0;
	}

	const sortArray = (field) => {
		const listToSort = [...filteredList];
		const nameSort = listToSort.sort(compareByName);
		// console.log(nameSort);
		// console.log(listToSort);
		setFilteredList(listToSort);
	};

//sorting products by type
	function compareByType(a, b) {
		if (a.productType < b.productType) {
			return -1;
		}
		if (a.productType > b.productType) {
			return 1;
		}
		return 0;
	}

	const sortByType = (type) => {
		const listByTypes = [...filteredList];
		const sortedTypeList = listByTypes.sort(compareByType);
		console.log(listByTypes);
		setFilteredList(sortedTypeList);
	};

	//sorting products by prise
	function compareByPrise(a, b) {
		if (a.productPrise < b.productPrise) {
			return -1;
		}
		if (a.productPrise > b.productPrise) {
			return 1;
		}
		return 0;
	}
	const sortByPrise = (prise) => {
		const listByPrises = [...filteredList];
		const sortedPriseList = listByPrises.sort(compareByPrise);
		console.log(listByPrises);
		setFilteredList(sortedPriseList);
	};


	const changeView =(event)=>{
		setIsClicked(false);
	}
	console.log(isClicked);

	return (
		<div className="d-flex flex-column mx-auto border-green main-body">
			<div className=" header">
				<div className="border-green title">Pups-shop DE</div>
			</div>

			<div className="container-box">
				<div className="inner-style">
					<button onClick={changeView} className="border-green btn-1">
						Change View
					</button>
				</div>

				<div className="inner-style">
					<div className="d-flex flex-row product-show">
						{(isClicked) ? (
							<ShowCard filteredList={filteredList} typesList={typesList} />
						) : (
							<ShowTable sortArray={sortArray} sortByType={sortByType} filteredList={filteredList} typesList={typesList} sortByPrise={sortByPrise} />
						)}
					</div>
					<div className="border-green product-list">
						<AddProduct typesList={typesList} />
						<SelectType typesList={typesList} updateChoice={updateChoice} />
					</div>
				</div>
			</div>
			<div className="footer-style">
				<p className="footer-data">All Rights Reserved 2023</p>
			</div>
		</div>
	);
}

export default App;
