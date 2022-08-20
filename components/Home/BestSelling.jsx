import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";
import ProductItem from "../ProductItem";
import {Swiper, SwiperSlide} from "swiper/react";

const HomeBestSellingHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-bottom: 16px;
  
  & span {

    /* Heading/18 Bold */

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    /* Light/Font/Dark */

    color: #06161C;    
  }
  & a {
    /* Body/14 Medium */

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    /* Light/Colors/Primary */

    color: #23AA49;
  }
`

const ProductsList = styled(Swiper)`
    & .swiper-slide {
      height: auto;
    }
`

const BestSelling = ({products}) => {

    products.rows.length = 4

    return (
        <div>
            <HomeBestSellingHeader>
                <span>Best selling 🔥</span>
                <Link href={"/products"}>See all</Link>
            </HomeBestSellingHeader>

            <ProductsList
                slidesPerView={2}
                height={'auto'}
                spaceBetween={16}
            >
                {products.rows.map(product =>
                    <SwiperSlide key={product.id}>
                        <ProductItem product={product}/>
                    </SwiperSlide>
                )}
            </ProductsList>
        </div>
    );
};

export default BestSelling;