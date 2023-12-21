import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductLoader = () => {

  return (
    <>
      <div className="h-[386px] w-full  p-3 md:p-0 gap-5 flex flex-col md:flex-row md:gap-20 ">
        <div className="md:h-full w-full h-36 md:w-[304px] ">
          <img
            src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="loader dummy image"
            className="md:w-[304px] md:h-[386px] w-36 h-36 object-cover flex-shrink-0"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between w-full md:w-2/3 md:py-10">
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="md:text-xl text-base font-medium">...loading...title...</h2>
            <p className="md:text-lg text-xs font-light flex flex-wrap h-20 md:h-auto overflow-hidden md:overflow-auto text-ellipsis">
              ...loading...description...
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-5">
            <p className=" text-base md:text-2xl font-medium">
              <span className=" text-base md:text-2xl font-medium"></span>...loading...price...
            </p>
            <Link >
              <Button text={`...loading...cart... `} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="text-neutral-600 md:mt-12" />
    </>
  );
};

export default ProductLoader;
