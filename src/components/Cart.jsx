import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "./card/Accordion/FoodItem";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="mt-[100px]">
      {cart.map((item, index) => {
        return <FoodItem info={item} />;
      })}
    </div>
  );
};

export default Cart;
