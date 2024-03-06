import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import {Container} from './Header'
import heroImage from './assets/images/Hero.png'

SwiperCore.use([Navigation, Pagination]);

const BoxSlides = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1270px;
    border-radius: 24.44px;
    background: rgb(34, 34, 34);
`;
const Image = styled.img`
    position: absolute;
    width: 310px;
    height: 280px;
`;
const Text = styled.p`
width: 1111.94px;
height: 319.08px;
color: rgb(233, 229, 225);
text-align: center;
`;

const Hero = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide key={1}>
        <BoxSlides>
        <Image src={heroImage} alt="Hero Image" />
            <Text>
                YUM
              <br />
                BOX
            </Text>
        </BoxSlides>
      </SwiperSlide >
      <SwiperSlide key={2}>Slide 2</SwiperSlide>
      <SwiperSlide key={3}>Slide 3</SwiperSlide>
    </Swiper>
  )
}

export default Hero
