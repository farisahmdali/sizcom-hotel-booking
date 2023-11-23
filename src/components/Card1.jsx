import React from "react";
import image1 from "../asset/room2@2x.jpg";
import { Link } from "react-router-dom";

function Card1({ description, head, price,link }) {
  return (
    <div className=" bg-white border border-gray-200 shadow relative">
      <div>
        <img  src={image1} alt="img"/>
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-[400] tracking-tight text-gray-600 ">
            {head}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link to={link} className="px-3 py-2 bg-black text-white">
          book from {price}$
        </Link>
        <hr className="mt-3" />
        <div className="flex justify-between text-slate-400 pt-3">
          <div className="grid grid-cols-4 gap-5">
            <img src="./img/5@2x.svg" alt="" className="w-5" />
            <img src="./img/2@2x.svg" alt="" className="w-5" />
            <img src="./img/3@2x.svg" alt="" className="w-5" />
            <img src="./img/1@2x.svg" alt="" className="w-5" />
          </div>
          <h1>FULL INFO</h1>
        </div>
      </div>
    </div>
  );
}

export default Card1;
