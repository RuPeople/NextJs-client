import React from 'react';
import styled from "@emotion/styled";
import {SwiperSlide} from "swiper/react";
import Link from "next/link";

const Wrapper = styled.div`
  position: relative;
  
  &>a{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
  }
  
  
  padding: 24px 16px;
  height: 100%;
  
  & img {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 24px;
  }

  background: #F3F5F7;
  border-radius: 16px;
  
`

const Name = styled.span`
  /* Body/14 Bold */

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Font/Dark */

  text-transform: capitalize;

  color: #1B1C1E;
`
const Price = styled.span`
  /* Body/16 Bold */

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Light/Colors/Secondary */

  color: #FF324B;
`
const AddButton = styled.button`
  background: #23AA49;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  border:none;
  
  position: absolute;


  bottom: 0%;
  right: 0%;
  margin-bottom: 12px;
  margin-right: 12px;
  
  cursor: pointer;
  
`

const ProductItem = ({product}) => {
    return (
            <Wrapper>
                <Link href={`/products/${product.id}`}>
                    <a>
                        <img src={process.env.NEXT_PUBLIC_API_URL + product.image}/>
                        <div>
                            <Name>{product.name}</Name>
                            <Price>1kg, {product.price}</Price>
                        </div>
                    </a>
                </Link>
                    {/*<AddButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="white"/>
                        </svg>
                    </AddButton>*/}
            </Wrapper>
    );
};

export default ProductItem;