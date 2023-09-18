import React from "react";

const Item = (props) => {
  const { result } = props;
  console.log(result);

  //const genericImg = "https://dummyimage.com/467x700/#/0011ff.jpg"
  const genericImg = "https://placekitten.com/467/700";

  // If no image loads we'll put a new one...of kitties :')
  const addDefaultSrc = (event) => {
    event.target.src = genericImg;
  }
  const resultName = result?.title && typeof(result.title[0]) == "string" ? result.title[0] : "Result Name";

  //  Grab the last 3 words of the title bc 'design'
  const resultNameTruncate = resultName === "Result" ? resultName : resultName.split(" ").slice(-3).join(" ");

  return (
    <div className="item"
      alt={result?.uid}
    >
      <a href={result?.imageUrl}>
        <img
          className="item__img"
          src={result?.imageUrl ? result.imageUrl : genericImg}
          alt={result?.name}
          onError={addDefaultSrc}
        />

        <h1 className="item__title">{resultNameTruncate}</h1>

        <div className="item__price">
          <p className="item__price__current">${result?.price}</p>
          <p className="item__price__msrp">${result?.msrp}</p>
        </div>
      </a>
    </div>
  );
}

export default Item;
