import React from 'react';
import Nav from '../contents/nav';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrap>
            <HeaderInner>
                <h1>yanadoo</h1>
                <Nav/>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            </HeaderInner>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.div`
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
`;