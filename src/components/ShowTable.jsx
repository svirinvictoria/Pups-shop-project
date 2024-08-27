import "./ShowTable.scss"
const ShowTable = (props)=>{
    
    return (
			<div className="table-container">
				<table className="table-style ">
					<thead>
						<tr>
							<th
								onClick={(event) => {
									props.sortArray("productName");
								}}
								className="inner-border header-style"
							>
								Produktname
							</th>
							<th
								onClick={(event) => {
									props.sortByType("typeName");
								}}
								className="inner-border header-style"
							>
								Produkttyp
							</th>
							<th onClick={(event)=>{props.sortByPrise("productPrise")}} className="header-style">Produktpreis (in Euro)</th>
						</tr>
					</thead>

					<tbody>
						{props.filteredList.map((product, index) => {
							return (
								<tr key={index}>
									<td className="table-border column-style">{product.productName}</td>
									<td className="table-border column-style">{product.productType}</td>
									<td className="table-border column-style">{product.productPrise}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
}

export default ShowTable;