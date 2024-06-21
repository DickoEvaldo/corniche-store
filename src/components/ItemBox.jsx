import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ItemBox = ({ url, name, price }) => {
  return (
    <div style={{ width: "85%" }}>
      <Link to={"/main"}>
        <img src={url} alt="" />
        <h3 className="text-l mt-3">{name}</h3>
        <h3 className="font-bold underline mb-4">${price}</h3>
      </Link>
    </div>
  );
};

export default ItemBox;
