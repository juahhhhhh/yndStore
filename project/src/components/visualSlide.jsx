import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";

const VisualTitle = styled.div`
  font-size:30px;
  font-weight:bold
`;
const Picture = styled.div`
  height:510px;
  width:100%;
  background-position:center;
  background-size:cover
`;
const settings = {
    slide: 'div',
    infinite : true, 	//무한 반복 옵션
    slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		// 세로 방향 슬라이드 옵션
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    // nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부
    easing: "linear",
    cssEase: "ease"
};

const VisualSlide = () => {
    let [SlideList, faqData] = useState([]);

    const faqListApi = () => {
        axios
            .get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData.json')
            .then(function (result) {
                faqData(result.data);
                console.log('응답 성공');
            })
            .catch(function (error) {
                console.log('응답 실패');
            });
    };

    useEffect(async () => {
        faqListApi();
    }, []);

    return (
        <>
            <Slider {...settings}>
                {/*{SlideList && SlideList.length > 0 && (*/}
                {/*    SlideList.map((item,idx) => {*/}
                {/*        console.log(item)*/}
                {/*        return (*/}
                {/*            <div key={idx}>*/}
                {/*                <a href={item.link} target="_blank">*/}
                {/*                    <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*)}*/}
                {SlideList && SlideList.length > 0 && (
                    SlideList.map((item,idx) => {
                        console.log(item)
                        return (
                            <a href={item.link} target="_blank" key={idx}>
                                <p>{item.desc}</p>
                                <VisualTitle>{item.title}</VisualTitle>
                                <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />
                            </a>
                        )
                    })
                )}
            </Slider>
        </>
    );
};

export default VisualSlide;
