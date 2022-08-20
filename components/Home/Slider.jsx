import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "@emotion/styled";

const SwiperSlider = styled(Swiper)`
  overflow: visible;
  
  margin-bottom: 24px;
`

const Slide = styled.div`
  & img {
    width: 100%;
  }
`

const Slider = () => {
    return (
        <SwiperSlider
            slidesPerView={1}
            direction={'horizontal'}
            loop={'true'}
            spaceBetween={10}
        >
            <SwiperSlide>
                <Slide>
                    <img src="../../static/Group%2036780.png" />
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <img src="../../static/Group%2036779%20(1).png" />
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <img src="../../static/Group%2036780.png" />
                </Slide>
            </SwiperSlide>
        </SwiperSlider>
    );
};

export default Slider;