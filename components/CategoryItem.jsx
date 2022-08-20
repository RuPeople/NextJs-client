import React from 'react';
import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & span {
    /* Body/14 Medium */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;

    /* Light/Font/Dark */

    color: #06161C;

    text-transform: capitalize;
  }
`

const ImageWrapper = styled.div`
  background: #F3F5F7;
  border-radius: 100%;
  
  padding: 16px;
  
  margin-bottom: 8px;

  & img {
    vertical-align: middle;
    width: 35px;
    height: 35px;
  }
`


const CategoryItem = ({category}) => {
    return (
        <Link href={`/categories/${category.id}`}>
            <a>
                <Wrapper>
                    <ImageWrapper>
                        <img src={process.env.NEXT_PUBLIC_API_URL + category.image} />
                    </ImageWrapper>
                    <span>
                        {category.name}
                    </span>
                </Wrapper>
            </a>
        </Link>
    );
};

export default CategoryItem;