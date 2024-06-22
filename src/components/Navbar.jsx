import React from "react";
import DrawerExample from "./drawer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="flex max-w-full justify-between border border-gray-300 p-6 align-middle shadow-sm">
      <div className="flex self-center">
        <DrawerExample></DrawerExample>
      </div>
      <div className="flex self-center">
        <Link to="/main">
          <h1 className="text-4xl font-semibold tracking-wider">Corniche</h1>
        </Link>
      </div>
      <div className="flex align-middle">
        <div className="flex gap-6 self-center">
          <h3>Call us</h3>
          <Link to="/profile">
            <PersonOutlineIcon></PersonOutlineIcon>
          </Link>
          <Link>
            <ShoppingCartIcon></ShoppingCartIcon>
            {cartItems.length > 0 && (
              <span className="absolute top-6 right-4 -bottom-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
