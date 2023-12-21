import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="h-[35vh] bg-black flex md:flex-row flex-col items-center justify-between gap-3 md:gap-0 px-10 py-10">
      <div className="text-white md:text-start text-center text-base md:text-xl font-normal">
        <Link to="/" className="cursor-pointer">Karo Abhayaas</Link>
        <p>112, ELECTRONIC CITY</p>
        <p>BANGALORE, INDIA</p>
      </div>
      <div className="text-white text-base md:text-xl flex flex-col items-center md:items-start gap-6 font-normal">
        <p>SOME TEXT ABOUT SOMETHING <br /> AND THEN SOME OTHER THING</p>
        <div className="flex gap-4 md:gap-8">
        <Link to='/products'>
        <Button text={"PRODUCTS"} bgColor={"bg-white"}  textColor={"text-black"}/></Link>
        <Link to='/cart'>
        <Button text={"CART"} bgColor={"bg-white"} textColor={"text-black"}/></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
