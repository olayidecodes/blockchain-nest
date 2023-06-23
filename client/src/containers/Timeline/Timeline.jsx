import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Timeline.scss";

// import required modules
import { Grid, Pagination } from "swiper";

export default function Timeline() {
  return (
    <div className="timeline">
    <h1 className="section__title">
        Timeline
      </h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        autoplay= {{
            delay: 5000,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
      
      <div className="bottom">

        <SwiperSlide className="box left">
            <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p>
        </SwiperSlide>
        <SwiperSlide className="box right">
            <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box left">
            <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box right">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box left">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box right">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box left">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box right">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p></SwiperSlide>
        <SwiperSlide className="box left">
        <h1 className="title">The beginning</h1>
            <p className="desc">founded by Christoph Mussenbrock and Stephan Karpischek</p>
            <p className="date">July 28, 2016</p>
        </SwiperSlide>
      </div>
      </Swiper>
    </div>
  );
}
