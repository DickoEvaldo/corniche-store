import React from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import CartBox from "../components/CartBox";
import { Button } from "@mui/material";
const CartPage = () => {
  const { cartItems, addCart, removeCart } = useCart();
  const [total, setTotalCount] = React.useState(0);
  React.useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      if (cartItems.length > 0) {
        cartItems.forEach((item) => (total += parseInt(item.price)));
      }

      setTotalCount(total);
    };

    calculateTotal();
  }, [cartItems]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="p-28">
        <h1 className="text-4xl font-semibold">
          Shopping Bag ({cartItems.length})
        </h1>
        <div className="flex gap-16">
          <div className="flex flex-col w-full mt-5 gap-4">
            {cartItems.map((item) => (
              <CartBox
                name={item.name}
                price={item.price}
                url={item.imageUrl}
                onClick={() => removeCart(item.name)}
              />
            ))}
          </div>
          <div className="w-6/12 flex flex-col">
            <p className="text-xl font-semibold">Apply Promo Code</p>
            <TextField
              id="standard-basic"
              label="Promo Code"
              variant="standard"
            />
            <div className="flex flex-col gap-3 text-sm font-semibold mt-6">
              <div className="flex justify-between ">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between">
                <p>Discounts</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-8">
                <p>Total({cartItems.length})</p>
                <p>${total}</p>
              </div>
              <div>
                <img
                  className="w-1/3"
                  src="https://image.msscdn.net/global/images/payments/creditcard_v2.png"
                  alt=""
                />
              </div>
              <Button
                sx={{
                  color: "white",
                  border: "1px solid black",
                  bgcolor: "black",
                  fontWeight: "bold",
                  marginTop: 2,
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
