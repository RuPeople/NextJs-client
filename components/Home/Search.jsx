import React from 'react';
import styled from "@emotion/styled";
import search from '../../static/search.svg'

const Label = styled.label`
  position: relative;
  
  &:before{
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    
    background: url(${search});
  }
  
`

const Input = styled.input`
  width: 100%;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  /* Light/Font/Grey */

  color: #979899;
  
  padding: 16px;
  border: none;
  border-radius: 65px;
  background: #fafafa;

  margin-bottom: 24px;
  
`

const Search = () => {
    return (
        <Label>
            <Input
                placeholder="Search product"
            />
        </Label>
    );
};

export default Search;

