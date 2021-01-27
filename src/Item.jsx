import React from "react";

function Item(props) {

  return (
    <div className="item">
      <img className="item__img" src="https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/6282_copyright_reddressboutique_2017__large.jpg" alt="Model wearing Jumpsuit" />
      <h1 className="item__title">Midi Jumpsuit</h1>
      <div className="item__price">
        <p className="item__price__current">$49.00</p>
        <p className="item__price__msrp">$50.00</p>
      </div>
    </div>
  );
}

export default Item;
