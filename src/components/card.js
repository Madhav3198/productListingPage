import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, color, price, img,stock,size } = item;
  return (
    <div className="cards">
     <div ><img src={img} alt="" /></div>
     <div ><p>{title}</p></div>
     <div ><p>{color}</p></div>
     <div ><p>{size}</p></div>
    <div ><p>{stock}</p></div>
    <div ><p>₹ {price}</p></div>
    <div ><button onClick={() => handleClick(item)}><i class="fa-solid fa-cart-shopping"></i></button></div>    
    </div>
  );
};

export default Cards;

