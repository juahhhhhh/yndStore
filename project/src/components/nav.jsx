import React from 'react';
import styled from "styled-components";



const MenuList =  styled.ul`
  float:left;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
`;

const MenuListItem = styled.li`
  display:inline-block;
  margin:0 0 0 10px;
  &:hover {
    color: red;
  }`;

const FindInput = styled.div `
  float:left;
  border-radius:5px;
`;

const UserBtn = styled.div `
  float:left;
`;
const Nav = () => {
    return (
        <>
            <MenuList>
                <MenuListItem><a href="#">menu-01</a></MenuListItem>
                <MenuListItem><a href="#">menu-02</a></MenuListItem>
                <MenuListItem><a href="#">menu-03</a></MenuListItem>
            </MenuList>

            <FindInput><input type="text"/></FindInput>
            <UserBtn>
                <button>로그인</button>
                <button>회원가입</button>
                <button>마이페이지</button>
                {/*<ul>*/}
                {/*    <li><a href="">내 클래스</a></li>*/}
                {/*    <li><a href="">주문/배송 조회</a></li>*/}
                {/*    <li><a href="">쿠폰</a></li>*/}
                {/*    <li><a href="">짬헌 상품</a></li>*/}
                {/*    <li><a href="">나의 문의내역</a></li>*/}
                {/*    <li><a href="">로그아웃</a></li>*/}
                {/*</ul>*/}
                <button>장바구니</button>
            </UserBtn>
        </>
    );
};

export default Nav;
