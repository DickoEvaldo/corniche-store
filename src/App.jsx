import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DemoCarousel from "./components/Carousel";
import { Heading, Text } from "@chakra-ui/react";
import { Button } from "@mui/material";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex flex-col mt-6 p-6">
          <div className="flex gap-12">
            <div className="w-6/12">
              <DemoCarousel></DemoCarousel>
            </div>
            <div className="flex flex-col self-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
