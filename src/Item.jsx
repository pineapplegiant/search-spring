import React from "react";

function Item(props) {
  //const genericImg = "https://dummyimage.com/467x700/#/0011ff.jpg"
  const genericImg = "https://placekitten.com/467/700";

  // If no image loads we'll put a new one...of kitties :')
  const addDefaultSrc = (event) => {
    event.target.src = genericImg;
  }

  return (
    <div className="item">
      <img
        className="item__img"
        src={props.imageUrl ? props.imageUrl : genericImg}
        alt={props.name}
        onError={addDefaultSrc}
      />
      <h1 className="item__title">
        {/* Grab the last 3 words of the title bc 'design' */}
          {props.title && typeof(props.title) == "string" ? props.title.split(" ").slice(-3).join(" ") : "lol"}
      </h1>
      <div className="item__price">
        <p className="item__price__current">${props.price}</p>
        <p className="item__price__msrp">${props.msrp}</p>
      </div>
    </div>
  );
}

export default Item;
