import React from "react";
import "./SelectType.scss";


const SelectType = (props) => {
	
	// const [typeChoice, setTypeChoice] = useState("");//the type that we have chosen

	
	return (
		<div>
			<div className="border-green check-home selection-window ">
				{props.typesList.map((type, index) => {
					return (
						<div className="label-text form-label" key={index}>
							<input
								className="check-frame"
								checked={type.typeStatus}
								type="checkbox"
								id="type"
								name="type"
								onChange={(event) => {
									props.updateChoice(type);
								}}
							/>
							<label className="label-text" htmlFor="type"></label>
							{type.typeName}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SelectType;
