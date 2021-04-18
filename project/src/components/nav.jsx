import React from 'react';

const Nav = () => {
    return (
        <>
            <ul>
                <li><a href="#">menu-01</a></li>
                <li><a href="#">menu-02</a></li>
                <li><a href="#">menu-03</a></li>
            </ul>

            <div><input type="text"/></div>
            <div>
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
            </div>
        </>
    );
};

export default Nav;
