import React from 'react';
import Head from "next/head";
import styled from "@emotion/styled";
import Link from "next/link";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  
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
const Main = styled.main`
  /*overflow-y: auto;
  overflow-x: hidden;
  height: 100%;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 6px solid rgba(0, 0, 0, 0.18);
    border-left: 0;
    border-right: 0;
    background-color: #23AA49;;
  }*/
  
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
  
`


const MainContainer = ({children, keywords, title, categoryName, productName }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title ? `${title} | ` : ""} Grocery Store</title>
                <meta name="description" content="Online grocery store. Sale of products with home delivery 🚚. 😊 Order food in the online store at competitive prices ⚡. Special offers, promotions and discounts." />
                <meta keywords={"RuPeople, next js " + keywords}/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>

            </Head>
            <Main>
                {children}
            </Main>
        </React.Fragment>
    );
};

export default MainContainer;