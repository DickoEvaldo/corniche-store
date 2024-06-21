import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt3 from "../assets/shirt3.jpg";
import shirt4 from "../assets/shirt4.jpg";
class DemoCarousel extends Component {
  onChange = (index) => {
    console.log(`Slide changed to: ${index}`);
  };

  onClickItem = (index) => {
    console.log(`Item clicked: ${index}`);
  };

  onClickThumb = (index) => {
    console.log(`Thumbnail clicked: ${index}`);
  };

  render() {
    return (
      <Carousel
        showArrows={true}
        onChange={this.onChange}
        onClickItem={this.onClickItem}
        onClickThumb={this.onClickThumb}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
      >
        <div>
          <img src={shirt1} alt="Slide 1" />
        </div>
        <div>
          <img src={shirt2} alt="Slide 2" />
        </div>
        <div>
          <img src={shirt3} alt="Slide 3" />
        </div>
        <div>
          <img src={shirt4} alt="Slide 4" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
