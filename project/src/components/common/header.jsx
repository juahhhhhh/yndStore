import React from 'react';
import Nav from '../contents/nav';
import styled from 'styled-components';
import footerLogo from '../../images/logo.png';

const Header = () => {
    return (
        <HeaderWrap>
            <HeaderInner>
                <h1><img src={footerLogo} alt="야나두"/></h1>
                {/*<h1>yanadoo</h1>*/}
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>
                <Nav/>
                <RightMenu>
                    <HeaderSearch><input type="text" placeholder={'검색'} className='search'/></HeaderSearch>
                    <div style={{float:"left",margin:"0 30px",lineHeight:"90px"}}>야나두 회원님</div>
                    <MyPageBtn name="" id="">
                        <option value="">마이페이지</option>
                        <option value="">내 클래스</option>
                        <option value="">주문/배송 조회</option>
                        <option value="">쿠폰</option>
                        <option value="">찜한 상품</option>
                        <option value="">나의 문의 내역</option>
                        <option value="">로그아웃</option>
                    </MyPageBtn>
                </RightMenu>
                    {/*<MyBtn>마이페이지</MyBtn>*/}
                    {/*<MyMenu>*/}
                    {/*    <li><a href="">내 클래스</a></li>*/}
                    {/*    <li><a href="">주문/배송 조회</a></li>*/}
                    {/*    <li><a href="">쿠폰</a></li>*/}
                    {/*    <li><a href="">찜한 상품</a></li>*/}
                    {/*    <li><a href="">나의 문의 내역</a></li>*/}
                    {/*    <li><a href="">로그아웃</a></li>*/}
                    {/*</MyMenu>*/}
            </HeaderInner>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  border-bottom: 1px solid #d6d6d6;
  z-index: 1000;
`;
const HeaderInner = styled.div`
  overflow:hidden;
  width:75%;
  margin:0 auto;
  display:flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightMenu = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
`;
const HeaderSearch = styled.div`
  //float:left;
  margin:0 0 0 0;
  //line-height:90px;
  .search {
    width:250px;
    padding:10px;
    border-radius:20px;
    border:1px solid #ddd;
    box-sizing: border-box;
    outline:none;
  }
`;

const MyMenu = styled.ul`
  display:none
`;
const MyBtn = styled.button`
  display:block;
  &:hover ${MyMenu} {
    display:block;
    background:darkred;
  }
`;

const MyPageBtn = styled.select`
  //float:left;
 width:140px;
  //margin:26.5px 0;
  padding:10px;
  border:1px solid #ddd;
  border-radius:10px;
  box-sizing: border-box;
  appearance: none;
  && {
    text-align:right;
  }
`