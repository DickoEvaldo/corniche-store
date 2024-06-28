import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import DemoCarousel from "../components/Carousel";
import { Heading, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
import ItemCarousel from "../components/itemCarousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import stock1 from "../assets/stock1.jpg";
function Main() {
  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar></Navbar>
        <div className="flex flex-col mt-2 p-6 md:mt-6">
          <div className="gap-12 md:flex">
            <div className="w-full md:w-6/12">
              <DemoCarousel></DemoCarousel>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col self-center mt-10 md:mt-0"
            >
              <Heading
                className="text-4xl md:text-6xl font-medium"
                fontFamily={"SuisseWorks"}
              >
                2024 Summer Sale
              </Heading>
              <h2 className="text-lg md:text-xl">
                The last big chance this summer! Enjoy up to 85% off and special
                promotions
              </h2>
              <Link to="/store">
                <Button
                  variant="outlined"
                  className="w-full md:w-6/12"
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
        <div className="flex flex-col py-8 md:mt-6 md:p-8">
          <h1
            className="text-4xl px-8 md:text-5xl md:px-0 font-medium"
            style={{ fontFamily: "SuisseWorks" }}
          >
            Recommended For you
          </h1>
          <div className="mt-6 md:mt-12">
            <ItemCarousel></ItemCarousel>
          </div>
        </div>
        <div className="flex flex-col px-8 mt-8 md:mt-0">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col self-center gap-6">
              <h1
                className="text-4xl text-center md:text-5xl md:text-start font-medium"
                style={{ fontFamily: "SuisseWorks" }}
              >
                Own your style
              </h1>
              <h3 className="text-lg text-center md:text-xl md:text-start">
                Crafted for those extraordinary moments where the only limit is
                your imagination. Boldly express yourself in dresses that take
                you from day to night, exclusively from our boutique in Bandung.
              </h3>
            </div>
            <img
              src={stock1}
              alt=""
              className=" p-2 h-6/12 mt-4 md:w-1/2 md:mt-10 md:p-12"
            />
          </div>
        </div>
        <footer className="flex mt-auto p-6 mt-18">
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
