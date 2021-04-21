import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';

const settings = {
    slide: 'div',
    infinite : true, 	//무한 반복 옵션
    slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : false,			// 자동 스크롤 사용 여부
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
    const [SlideList, setSlideList] = useState([]);
    const visualList  = () => {
        axios.get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData6.json')
            .then(function (response) {
                setSlideList(response.data);
                console.log('setSlideList',response);
            })
            .catch(function (error) {
                console.log('setSlideList',error);
            });
    };

    useEffect(async () => visualList(), []);

    return (
        <div className="visual-slide-col">
            <div className="inner-col">
                <SectionTitle title={'야나두 visual-slide'} desc={'야나두 visual slide 입니다. react-slick 을 이용했습니다.'}/>
                <Slider {...settings}>
                    {SlideList && SlideList.length > 0 && (
                        SlideList.map((item,idx) => {
                            console.log(item)
                            return (
                                <a href={item.link} target="_blank" key={idx}>
                                    <VisualTitle>
                                        <VisualDesc>{item.desc}</VisualDesc>
                                        {item.title}
                                    </VisualTitle>
                                    <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />
                                </a>
                            )
                        })
                    )}
                </Slider>
            </div>
        </div>
    );
};

const VisualTitle = styled.div`
  position:absolute;
  top:10px;
  left:20px;
  font-size:20px;
  font-weight:bold;
  color:#fff;
`;
const VisualDesc = styled.p`
  font-size:15px;
  font-weight:normal
`;
const Picture = styled.div`
  height:510px;
  width:100%;
  background-position:center;
  background-size:cover
`;
export default VisualSlide;
