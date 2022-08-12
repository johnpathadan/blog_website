import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import './App.css';

// import required modules
import { Pagination } from "swiper";
function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
        <SwiperSlide><div><h1>Hi</h1></div></SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
