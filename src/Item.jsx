import React from "react";

function Item(props) {
  const genericImg = "https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/6282_copyright_reddressboutique_2017__large.jpg"
  return (
    <div className="item">
      <img
        className="item__img"
        src={props.imageUrl ? props.imageUrl: genericImg}
        alt={props.name? props.name.split(" ").slice(-3) : "lol"}
      />
      <h1 className="item__title">{props.title}</h1>
      <div className="item__price">
        <p className="item__price__current">${props.price}</p>
        <p className="item__price__msrp">${props.msrp}</p>
      </div>
    </div>
  );
}

export default Item;
