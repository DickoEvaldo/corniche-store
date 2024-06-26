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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex p-6 flex-col">
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <ItemBoxStore
                  name={item.name}
                  price={item.price}
                  url={item.imageUrl}
                  addToCart={() => addToCart(item)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
