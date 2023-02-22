import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.scss';
export const Slider = (props) => {
  return (
    <div className={styles.sliders}>
      <Carousel>
        <Carousel.Item interval={100000}>
          <img className="d-block imgSlider" src="images/slide_0.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <img className="d-block imgSlider" src="images/slide_1.webp" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100000}>
          <img className="d-block imgSlider" src="images/slide_2.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
