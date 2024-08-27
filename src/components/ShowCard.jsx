import React from "react";
import "./ShowCard.scss";

const ShowCard = (props) => {
  const changeClass = (productType) => {
    if (productType === "Gemüse") {
      return "green";
    } else if (productType === "Obst") {
      return "yellow";
    } else if (productType === "Milch") {
      return "blue";
    } else if (productType === "Fleisch") {
      return "red";
    }
  };

  return (
    <div className="container-box">
      <div className="d-flex flex-row product-show">
        {props.filteredList.map((productItem, idx) => {
          return (
            <div
              className={`border-green product-ticket ${changeClass(
                productItem.productType
              )} `}
              key={idx}
            >
              <div className="ticket-header">{productItem.productName}</div>
              <div className="border border-success ticket-body">
                <img
                  src={process.env.PUBLIC_URL + productItem.image}
                  alt=""
                />
              </div>
              <div className="ticket-footer">{productItem.productPrise}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCard;
