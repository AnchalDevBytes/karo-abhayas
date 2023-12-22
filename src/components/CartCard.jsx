import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

const CartCard = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <div className="max-w-[75vw] my-10 mx-auto flex items-center justify-between border border-neutral-300 p-4">
      <div className="flex flex-col gap-1">
        <h3 className="md:text-2xl max-w-[60%] text-base font-bold">
          {item?.title}
        </h3>
        <h5 className="md:text-lg text-xs font-thin md:font-normal">
          MODULE: {item?.category}
        </h5>
        <h5 className="md:text-lg text-xs font-thin md:font-normal">
          PRICE: $ {item?.price}
        </h5>
      </div>
      <div className="flex flex-col gap-3 items-center ">
        <div className="flex items-center justify-center w-[30%]">
          <div onClick={() => decrementQuantity(item?.id)}>
            <Button text={"-"} />
          </div>
          <input
            className="w-8 py-[6px] bg-black text-white text-center"
            value={quantity}
            type="text"
            readOnly
          />
          <div onClick={() => incrementQuantity(item?.id)}>
            <Button text={"+"} />
          </div>
        </div>
        <div onClick={()=>removeFromCart(item?.id)} className="w-full text-center bg-black cursor-pointer active:text-red-500 active:bg-black/70 transition-all">
          <Button text={"DELETE"}/>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
