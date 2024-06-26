import React from "react";

const CartBox = ({ name, price, url, onClick }) => {
  return (
    <div className="flex pb-6 border-b border-gray-300">
      <img className="w-28 h-28" src={url} alt="" />
      <div className="flex flex-col ml-4 w-full">
        <div className="font-bold">{name}</div>
        <div className="text-sm flex flex justify-between">
          <p>Qty: 1</p>
          <p className="text-red-600 font-bold">${price}</p>
        </div>
        <div className="flex gap-8 text-sm mt-auto">
          <p className="underline">Move to wishlist</p>
          <p className="underline cursor-pointer" onClick={onClick}>
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
