import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import './slider.css'
import sliderImage from './slider1.jpeg';
import sliderImage2 from './slider2.jpg';
import sliderImage3 from './slider3.jpg';
class Slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <Sliders {...settings} >
          <div className='wdt'>
            <img className='imgs' src={sliderImage} alt='test' />
          </div>
          <div className='wdt'>
            <img className='imgs' src={sliderImage2} alt='test' />
          </div>
          <div className='wdt'>
            <img className='imgs' src={sliderImage3} alt='test' />
          </div>
        </Sliders>
      </div>
    );
  }
}
export default Slider
