import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export const Slider = (props) => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img className="d-block imgSlider" src="images/salad_1.png" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block imgSlider" src="images/salad_0.png" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block imgSlider" src="images/salad_0.png" alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
