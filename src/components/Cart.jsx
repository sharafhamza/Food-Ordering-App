import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./card/Accordion/FoodItem";
import { clearCart } from "./store/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-[130px] max-w-4xl mx-auto">
      <div className="text-center">
        <button
          className="px-10 py-3 border bg-orange-400 text-white font-bold border-gray-300 rounded-lg"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>

      {cart.length == 0 && (
        <p className="text-center text-md flex items-center justify-center py-12">
          Your Cart is empty
        </p>
      )}
      {cart.map((item, index) => {
        console.log(item);

        return <FoodItem info={item} key={item.id} />;
      })}
    </div>
  );
};

export default Cart;
