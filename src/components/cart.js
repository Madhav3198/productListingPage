import React, { useState, useEffect } from "react";
import Checkout from "./checkout";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [hide,SetHide]=useState(true);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
 /*-----------------------------------------------------------------------------------------------------------*/   
    hide?(
      
    <div className="Main">

      <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div>
          <button onClick={() => handleRemove(item.id)}><i class="fa-solid fa-trash"></i></button>
          </div>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>₹ {item.price}</span>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, +1)}>+</button>
          </div>
          <div>
            <span>₹ {item.price*item.amount}</span>
          </div>
          
          <div>

          </div>
        </div>
      ))}
      </article>

      <div className="total">
    <span >Cart totals <br /></span>
    <div className="sub-total">
        <h3>Subtotal</h3>
        <h3>₹  {price}</h3>
    </div>
    <div className="total-2">
    <h3>Total</h3>
    <h3>₹  {price}</h3>
    </div>
    <button onClick={()=>SetHide(false)}>Proceed to Checkout</button>
  </div>

    </div>):(<Checkout/>)
    


  );
};

export default Cart;