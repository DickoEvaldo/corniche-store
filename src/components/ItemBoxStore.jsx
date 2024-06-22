import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ItemBoxStore = ({ url, name, price, addToCart }) => {
  return (
    <div style={{ width: "85%" }}>
      <img src={url} alt="" />
      <h3 className="text-l mt-3">{name}</h3>
      <div className="flex justify-between">
        <h3 className="font-bold">${price}</h3>
        <ShoppingCartIcon
          onClick={addToCart}
          style={{ cursor: "pointer" }}
        ></ShoppingCartIcon>
      </div>
    </div>
  );
};

export default ItemBoxStore;
