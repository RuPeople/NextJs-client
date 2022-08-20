import React, {useContext} from 'react';
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import CategoryItem from "../components/CategoryItem";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import TabBar from "../components/TabBar";


const Header = styled.div`
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

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;

    /* Light/Font/Dark */

    color: #06161C;
    text-transform: capitalize;
    
    width: calc(100% - 44px);
  }
`

const Content = styled.div`
  padding-bottom: 48px;
`

const CategoriesList = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;

  grid-column-gap: 16px;
  grid-row-gap: 16px;
`

const Categories = ({categories}) => {
    const router = useRouter()
    return (
        <MainContainer title="categories" keywords="categories">
            <Header>
                <div onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M13.75 4.58334C13.6294 4.58264 13.5098 4.60576 13.3981 4.65138C13.2864 4.697 13.1849 4.76421 13.0992 4.84917L7.5992 10.3492C7.42847 10.5209 7.33264 10.7533 7.33264 10.9954C7.33264 11.2376 7.42847 11.4699 7.5992 11.6417L13.0992 17.1417C13.2746 17.2918 13.5001 17.3703 13.7308 17.3614C13.9615 17.3525 14.1804 17.2569 14.3436 17.0936C14.5069 16.9304 14.6025 16.7115 14.6114 16.4808C14.6203 16.2501 14.5419 16.0245 14.3917 15.8492L9.54253 11L14.3917 6.15084C14.5204 6.02317 14.6084 5.8602 14.6445 5.68254C14.6806 5.50488 14.6632 5.3205 14.5945 5.15272C14.5258 4.98494 14.409 4.8413 14.2586 4.73995C14.1083 4.6386 13.9313 4.5841 13.75 4.58334Z" fill="#06161C"/>
                    </svg>
                </div>
                <h1>categories 😋</h1>
            </Header>
            <Content>
                <CategoriesList>
                    {categories.map(category =>
                        <CategoryItem category={category} key={category.id} />
                    )}
                </CategoriesList>
            </Content>
            <TabBar/>
        </MainContainer>
    );
};

export default Categories;


export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5003/api/categories`)
    const categories = await response.json()


    return {
        props: {categories}, // will be passed to the page component as props
    }
}