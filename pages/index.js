import MainContainer from "../components/MainContainer";
import Search from "../components/Home/Search";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from "../components/Home/Slider";
import HomeCategories from "../components/Home/HomeCategories/HomeCategories";
import React, {createContext} from "react";
import Link from "next/link";
import BestSelling from "../components/Home/BestSelling";
import styled from "@emotion/styled";
import TabBar from "../components/TabBar";


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
  
`
const UserHello = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  align-items: start;
  height: 100%;
  
  & p {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    /* Light/Font/Grey */

    color: #979899;
  }
  & span {
    font-family: 'DM Sans',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */


    /* Light/Font/Dark */

    color: #06161C;
  }
`

const Content = styled.div`
  padding-bottom: 48px;
`

export default function Home({categories, products}) {
  return (
          <MainContainer>
              <Header>
                  <img src="https://picsum.photos/44" />
                  <UserHello>
                      <p>Good morning</p>
                      <span>Amelia Barlow</span>
                  </UserHello>
              </Header>

              <Content>
                  <Search/>
                  <Slider/>
                  <HomeCategories categories={categories} />
                  <BestSelling products={products} />
              </Content>

              <TabBar/>

          </MainContainer>
  )
}

export async function getServerSideProps(context) {
    const responseCategories = await fetch(`http://localhost:5003/api/categories`)
    const categories = await responseCategories.json()

    const responseProducts = await fetch(`http://localhost:5003/api/products`)
    const products = await responseProducts.json()
    return {
        props: {categories, products}, // will be passed to the page component as props
    }
}