import React from 'react';
import styled from "@emotion/styled";
import Link from "next/link";
import Categories from "../../../pages/categories";
import CategoryItem from "../../CategoryItem";

const Wrapper = styled.div`
  margin-bottom: 24px;
`

const HomeCategoriesHeader = styled.div`
  
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

const CategoriesList = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
`

const HomeCategories = ({categories}) => {
    return (
        <Wrapper>
            <HomeCategoriesHeader>
                <span>Categories 😋</span>
                <Link href={"/categories"}>See all</Link>
            </HomeCategoriesHeader>

            {categories?.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <CategoriesList>
                    {categories?.map(category =>
                        <CategoryItem key={category.id} category={category}/>
                    )}
                </CategoriesList>
                )
            }
        </Wrapper>
    );
};


export default HomeCategories;
