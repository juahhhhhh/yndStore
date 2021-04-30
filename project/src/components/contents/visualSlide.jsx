import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';

const settings = {
    slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
    speed :500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
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
                <SectionTitle align={false}  beforeDesc={''} title={'Slick React Library 사용'} afterDesc={''}/>
                <Slider {...settings}>
                    {SlideList && SlideList.length > 0 && (
                        SlideList.map((item,idx) => {
                            console.log(item)
                            return (
                                <a href={item.link} target="_blank" key={idx} style={{display:"block",padding:"0 10px"}}>
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
