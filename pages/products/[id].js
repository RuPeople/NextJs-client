import React, {useContext, useEffect, useState} from 'react';
import MainContainer from "../../components/MainContainer";
import Link from "next/link";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {Context} from "../index";
import {MyContext} from "../_app";




const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  position: absolute;
  width: 100%;
  z-index: 100;
  top:0;
  left: 0;
  padding: 24px;

  background: #FFFFFF;

  & img {
    width: 44px;
    height: 44px;
    border-radius: 100%;
    background: #6A8071;
  }

  & h1 {
    /* Heading/20 Bold */

    font-family: 'SansSerif';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;

    /* Light/Font/Dark */

    color: #06161C;

    width: calc(100% - 44px);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  &>h1 {
    /* Heading/24 Bold */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Font/Dark */

    color: #1B1C1E;
    margin-bottom: 8px;
  }
  
  &>h2{
    /* Heading/20 Bold */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;

    /* Light/Colors/Secondary */

    color: #FF324B;
    margin-bottom: 8px;
  }
  
  &>p{
    /* Body/16 Medium */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    /* Light/Font/Grey */

    color: #979899;
    margin-bottom: 24px;
  }
  
  &>img {
    padding: 36px 48px 80px 48px;
  }
`

const Characteristics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  
  margin-bottom: 24px;
`

const Characteristic = styled.div`
  border: 1px solid #F1F1F5;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  
  padding: 12px 16px;
  
  & div {
    margin-left: 16px;
  }
  
  & span:first-of-type{
    /* Body/16 Bold */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Light/Colors/Primary */

    color: #23AA49;
  }
  & span:last-of-type{
    /* Body/14 Medium */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* Light/Font/Grey */

    color: #979899;
  }
`

const AddButton = styled.button`
  cursor: pointer;
  
  padding: 16px;
  
  border: none;
  /* Light/Colors/Primary */

  background: #23AA49;
  border-radius: 100px;

  /* Body/16 Bold */

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;

`

const Content = styled.div`
  padding-top: 48px;
`

export default function ({product}) {

    const router = useRouter()

    const AddToCart = () => {
        router.back()
    }


    return (
        <MainContainer title={product.name} keywords={`${product.name}`}>
            <Header>
                <div onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M13.75 4.58334C13.6294 4.58264 13.5098 4.60576 13.3981 4.65138C13.2864 4.697 13.1849 4.76421 13.0992 4.84917L7.5992 10.3492C7.42847 10.5209 7.33264 10.7533 7.33264 10.9954C7.33264 11.2376 7.42847 11.4699 7.5992 11.6417L13.0992 17.1417C13.2746 17.2918 13.5001 17.3703 13.7308 17.3614C13.9615 17.3525 14.1804 17.2569 14.3436 17.0936C14.5069 16.9304 14.6025 16.7115 14.6114 16.4808C14.6203 16.2501 14.5419 16.0245 14.3917 15.8492L9.54253 11L14.3917 6.15084C14.5204 6.02317 14.6084 5.8602 14.6445 5.68254C14.6806 5.50488 14.6632 5.3205 14.5945 5.15272C14.5258 4.98494 14.409 4.8413 14.2586 4.73995C14.1083 4.6386 13.9313 4.5841 13.75 4.58334Z" fill="#06161C"/>
                    </svg>
                </div>
            </Header>

            <Content>
                <Wrapper>
                    <img src={process.env.NEXT_PUBLIC_API_URL + product.image}/>

                    <h1>{product.name}</h1>
                    <h2>1kg, {product.price} $</h2>
                    <p>{product.description}</p>

                    <Characteristics>
                        <Characteristic>
                            <img src='../static/lotus.svg'/>
                            <div>
                                <span>100%</span>
                                <span>organic</span>
                            </div>
                        </Characteristic>
                        <Characteristic>
                            <img src='../static/calendar.svg'/>
                            <div>
                                <span>{product.expiration}</span>
                                <span>expiration</span>
                            </div>
                        </Characteristic>
                        <Characteristic>
                            <img src='../static/favourites.svg'/>
                            <div>
                                <span>{product.reviews}</span>
                                <span>reviews</span>
                            </div>
                        </Characteristic>
                        <Characteristic>
                            <img src='../static/matches.svg'/>
                            <div>
                                <span>{product.energyValue} kcal</span>
                                <span>100 Gram</span>
                            </div>
                        </Characteristic>
                    </Characteristics>

                    <AddButton onClick={() => AddToCart()} >
                        AddToCart
                    </AddButton>
                </Wrapper>
            </Content>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {
    const responseProduct = await fetch(process.env.NEXT_PUBLIC_API_URL +`api/products/${params.id}`)
    const product = await responseProduct.json()
    return {
        props: {product}, // will be passed to the page component as props
    }
}