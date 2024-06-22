import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ItemBoxStore from "../components/ItemBoxStore";
import { getClothesData } from "../firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import { useCart } from "../components/CartContext";

const Store = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClothesData();
      setItems(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen
    "
    >
      <Navbar></Navbar>
      <div className="flex p-6">
        {loading ? (
          <div className="flex justify-center self-center w-full h-screen">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {items.map((item) => (
              <ItemBoxStore
                key={item.id}
                name={item.name}
                price={item.price}
                url={item.imageUrl}
                addToCart={() => addToCart(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
