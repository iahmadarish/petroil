import React from 'react'
import Slider from 'react-slick'
import SampleNextArrow from '../Layers/SampleNextArrow';


const Sliders = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
        
                <Slider {...settings}>
                    <img src="./images/nature1.png" alt="nature1" /> 
                    <img src="./images/nature2.png" alt="nature2" /> 
                    <img src="./images/nature3.png" alt="nature3" /> 
                    <img src="./images/nature4.png" alt="nature4" /> 
                    <img src="./images/nature1.png" alt="nature4" /> 
                    <img src="./images/nature2.png" alt="nature4" /> 
                    <img src="./images/nature3.png" alt="nature4" /> 
                    <img src="./images/nature4.png" alt="nature4" /> 
                </Slider>

  

  )
}

export default Sliders