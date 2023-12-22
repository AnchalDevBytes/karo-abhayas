import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {addToCart} = useCart();
  // console.log(cartValues);

  return (
    <>
      <div className="min-h-[386px] w-full  p-3 md:p-0 gap-5 flex flex-col md:flex-row md:gap-20 ">
        <div className="md:h-full w-full h-36 md:w-[304px] ">
          <img
            src={product?.image}
            alt={product?.title}
            className="md:w-[304px] md:h-[386px] w-36 h-36 object-cover flex-shrink-0"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between w-full md:w-2/3 md:py-10">
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="md:text-xl text-base font-medium">{product?.title}</h2>
            <p className="md:text-lg text-xs font-light flex flex-wrap h-20 md:h-auto overflow-hidden md:overflow-auto text-ellipsis">
              {product?.description}
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-5">
            <p className=" text-base md:text-2xl font-medium">
              <span className=" text-base md:text-2xl font-medium">₹</span>{product?.price}
            </p>
            <Link onClick={()=>addToCart(product)}>
              <Button text={`ADD TO CART `} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="text-neutral-600 md:mt-12" />
    </>
  );
};

export default ProductCard;
