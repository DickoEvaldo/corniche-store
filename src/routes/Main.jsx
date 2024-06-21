import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import DemoCarousel from "../components/Carousel";
import { Heading, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
import ItemCarousel from "../components/itemCarousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Main() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-col mt-6 p-6">
          <div className="flex gap-12">
            <div className="w-6/12">
              <DemoCarousel></DemoCarousel>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col self-center"
            >
              <Heading
                className="text-6xl font-medium"
                fontFamily={"SuisseWorks"}
              >
                2024 Summer Sale
              </Heading>
              <h2 className="text-xl">
                The last big chance this summer! Enjoy up to 85% off and special
                promotions
              </h2>
              <Link to="/store">
                <Button
                  variant="outlined"
                  className="w-6/12"
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    marginTop: "30px",
                  }}
                >
                  Shop Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col mt-6 p-8">
          <h1 className="text-5xl" style={{ fontFamily: "SuisseWorks" }}>
            Recommended for you
          </h1>
          <div className="mt-12">
            <ItemCarousel></ItemCarousel>
          </div>
        </div>
        <footer className="flex mt-auto p-6">
          <p className="text-sm text-gray-500">
            Corniche Co.,Ltd may not be the direct seller but only an
            intermediary for some products. In this case, Corniche has limited
            liability for products, information, and transactions. Please check
            the product details page of each product.
          </p>
        </footer>
      </div>
    </>
  );
}
export default Main;
