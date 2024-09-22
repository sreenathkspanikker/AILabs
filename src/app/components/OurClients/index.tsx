"use client"
import Image from 'next/image'
import React from 'react';
import Slider from "react-slick";

const OurClients = () => {
  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    autoSlide: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div><Image src="/DD.png" alt="" width={250} height={100} /></div>
        <div><Image src="/N2.png" alt="" width={250} height={100} /></div>
        <div><Image src="/INBREW.png" alt="" width={250} height={100} /></div>
        <div><Image src="/P&G.png" alt="" width={250} height={100} /></div>
        <div><Image src="/UL.png" alt="" width={250} height={100} /></div>
      </Slider>
    </div>
  );
}

export default OurClients