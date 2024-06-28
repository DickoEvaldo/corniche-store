import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ItemBox from "./ItemBox";
function ItemCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container ml-8 md:ml-0">
      <Slider {...settings}>
        <ItemBox
          name={"Fayra Blouse"}
          price={46.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt5.jpeg?alt=media&token=ea472311-4401-4d70-aed5-53f44ea5b5ac"
          }
        ></ItemBox>
        <ItemBox
          name={"Shalima Dress"}
          price={79.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt6.jpeg?alt=media&token=e4791c34-70e8-498f-af46-33f1df83f692"
          }
        ></ItemBox>
        <ItemBox
          name={"Slavia Turnic"}
          price={69.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt7.jpeg?alt=media&token=e6e6c05f-3771-427b-aaa9-5f3f925aa88c"
          }
        ></ItemBox>
        <ItemBox
          name={"Silva Blouse Tosca"}
          price={56.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt8.jpeg?alt=media&token=ddf86082-c323-4301-b69b-c2e84ff5d520"
          }
        ></ItemBox>
        <ItemBox
          name={"Cindera Shirt Cinder"}
          price={42.9}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt1.jpg?alt=media&token=adb68e90-2b08-46ec-930b-17fdd7025e52"
          }
        ></ItemBox>
        <ItemBox
          name={"Nada Blouse Walnut IDR "}
          price={52.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt4.jpg?alt=media&token=f0b9be63-8695-4705-9ffe-70363c5ed7a1"
          }
        ></ItemBox>
        <ItemBox
          name={"Milly Shirt Peach"}
          price={52.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt2.jpg?alt=media&token=9cfee9fa-fce2-4d70-8cbc-27fb52a9b7ab"
          }
        ></ItemBox>
        <ItemBox
          name={"Silva Blouse Tosca"}
          price={59.99}
          url={
            "https://firebasestorage.googleapis.com/v0/b/corniche-store.appspot.com/o/shirt3.jpg?alt=media&token=ef6d88b4-eae1-40ab-b0a5-0fe41e42531b"
          }
        ></ItemBox>
      </Slider>
    </div>
  );
}

export default ItemCarousel;
