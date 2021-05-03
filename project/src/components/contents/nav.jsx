import React from 'react';
import styled from "styled-components";



const Nav = () => {
    return (
        <>
            <MenuList>
                <MenuListItem><a href="#;">멤버십 프로그램</a></MenuListItem>
                <MenuListItem><a href="#;">자율 프로그램</a></MenuListItem>
                <MenuListItem><a href="#;">커뮤니티</a></MenuListItem>
                <MenuListItem><a href="#;">이벤트</a></MenuListItem>
            </MenuList>
        </>
    );
};

export default Nav;

const MenuList =  styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
  vertical-align: middle;
  @media (min-width: 48em) {
    clear: none;
    max-height: none;
  }
`;

const MenuListItem = styled.li`
  display: inline-block;
  vertical-align: top;
  @media (min-width: 48em) {
    float: left;
    padding: 0 30px;
  }
  @media screen and (max-width: 35.5em) {
  color:blue
  }
    &:hover {
    color: red;
  }
  & > a {
    color: #000;
    font-weight:800
  }`;

const FindInput = styled.div `
  float:left;
  border-radius:5px;
`;

const UserBtn = styled.div `
  float:left;
`;