import React, { useCallback, useEffect, useState, memo } from "react";
import { ProductCard, ProductLoader } from "../components";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setItems(products);
      setIsLoading(false);
    } catch (error) {
      console.log("the error occuerd in product page" + error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return isLoading ? (
    <div className="flex flex-col py-2 px-5 md:px-32 md:py-10">
      <div className="flex justify-between items-center py-1 px-5 bg-neutral-100 mb-4 md:mb-10">
        <IoMdSearch className="h-5 w-5 flex-shrink-0" />
        <input type="text" className="h-full w-full bg-transparent py-2" />
        <MdOutlineFilterList className="h-5 w-5 flex-shrink-0" />
      </div>
      <ul className="flex gap-4 md:gap-10 flex-col min-h-screen md:max-w-none max-w-[98%] mx-auto md:mx-0 overflow-auto">
        <li>
          <ProductLoader />
        </li>
        <li>
          <ProductLoader />
        </li>
        <li>
          <ProductLoader />
        </li>
        <li>
          <ProductLoader />
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex flex-col py-2 px-5 md:px-32 md:py-10">
      <div className="flex justify-between items-center py-1 px-5 bg-neutral-100 mb-4 md:mb-10">
        <IoMdSearch className="h-5 w-5 flex-shrink-0" />
        <input type="text" className="h-full w-full bg-transparent py-2" />
        <MdOutlineFilterList className="h-5 w-5 flex-shrink-0" />
      </div>
      <ul className="flex gap-4 md:gap-10 flex-col min-h-screen md:max-w-none max-w-[98%] mx-auto md:mx-0 overflow-auto">
        {items.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ProductPage);
