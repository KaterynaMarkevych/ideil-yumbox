import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Container } from "./Header";
import heroImage from "../assets/images/Hero.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DesktopHero from "../assets/images/DesktopHero.png";

const HeroSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxSlides = styled.div`
  position: relative;
  max-width: 100%;
  height: 316px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  background: rgb(34, 34, 34);
  @media (min-width: 769px){
    max-width: 1276px;
    height: 480px;
    right: 50px;
    left: 50px;
  }
`;
const Image = styled.img`
  top: 0;
  z-index: 1;
  width: 300px;
  height: 280px;
  @media (min-width: 769px){
    width: 700px;
    height: 650px;
    position: absolute;
    top: -50px;
  }
`;
const DesktopImage =styled.img`
  position: absolute;
  left: 20%;
  top: -170%; 
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 180px; 
  height: 180px;
  @media (max-width: 768px) {
    display: none;
  } 
`;
const Text = styled.p`
  position: absolute;
  top: -130%;
  left: 50%;
  color: rgb(233, 229, 225);
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 100px;
  text-align: center;
  @media (min-width: 769px){
    display: none;
  }
`;
const DesktopText = styled.p`
  position: absolute;
  color: rgb(233, 229, 225);
  font-weight: 700;
  font-size: 260px;
  left: 50%;
  top: -300%;
  width: 1112px;
  height: 320px;
  transform: translate(-50%, -50%);
  text-align: center;
@media (max-width: 769px){
  display: none;
}
`;
const HeroText = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 10px;
`;
const Text2 = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  padding-right: 10px;
  color: rgb(252, 184, 82);
  font-weight: 600;
  z-index: 1;
`;
const HeroButton = styled.button`
  background: none;
  border: 3px solid rgb(252, 184, 82);
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 25px;
  padding: 5px 30px; 
  color: rgb(252, 184, 82);
  margin-bottom: 25px;
  z-index: 1;
`;
const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
const Text3 = styled.p`
color: rgb(255, 255, 255);
font-size: 20px;
font-weight: 500;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
margin-top: 100px;
@media (min-width: 769px){
  margin-top: 65px;
}
`;
const Hero = () => {
  return (
    <Container>
      <HeroSwiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
          clickable: true,
        }}
        pagination={{ 
          clickable: true,
          el: ".pagination-wrap"
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide key={1}>
          <BoxSlides>
          <Image src={heroImage} alt="Hero Image" />
            <HeroContent>
            <DesktopImage src={DesktopHero} alt="Hero Image" />
            <Text>
              YUM
              <br />
              BOX
            </Text>
            <DesktopText>YUMBOX</DesktopText>
            <HeroText>
              <Text2>сет 21</Text2>
              <HeroButton>934 грн</HeroButton>
            </HeroText>
           </HeroContent>
          </BoxSlides>
        </SwiperSlide>
        <SwiperSlide key={2}>
        <BoxSlides>
            <Image src={heroImage} alt="Hero Image" />
            <HeroContent>
            <DesktopImage src={DesktopHero} alt="Hero Image" />
            <Text>
              YUM
              <br />
              BOX
            </Text>
            <DesktopText>YUMBOX</DesktopText>
            <HeroText>
              <Text2>сет 21</Text2>
              <HeroButton>934 грн</HeroButton>
            </HeroText>
           </HeroContent>
          </BoxSlides>
        </SwiperSlide>
        <SwiperSlide key={3}>
        <BoxSlides>
            <Image src={heroImage} alt="Hero Image" />
            <HeroContent>
            <DesktopImage src={DesktopHero} alt="Hero Image" />
            <Text>
              YUM
              <br />
              BOX
            </Text>
            <DesktopText>YUMBOX</DesktopText>
            <HeroText>
              <Text2>сет 21</Text2>
              <HeroButton>934 грн</HeroButton>
            </HeroText>
           </HeroContent>
          </BoxSlides>
        </SwiperSlide>
      </HeroSwiper>
      <div className="button-next-slide">
        <FaArrowRight size="15px" color="white" />
      </div>
      <div className="button-prev-slide">
        <FaArrowLeft size="15px" color="white" />
      </div>
      <div className="pagination-wrap"></div>
      <div>
        <Text3>Найчастіше замовляють</Text3>
      </div>
    </Container>
  );
};

export default Hero;
