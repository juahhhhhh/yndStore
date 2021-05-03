import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
// import 'swiper-bundle.css';
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';

const VisualSlide2 = () => {
    const [SlideList, setSlideList] = useState([]);
    const visualList2  = () => {
        axios.get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData7.json')
            .then(function (response) {
                setSlideList(response.data);
                console.log('setSlideList',response);
            })
            .catch(function (error) {
                console.log('setSlideList',error);
            });
    };

    useEffect(async () => visualList2(), []);
    return (

        <div className="visual-slide-col" style={{margin:"0 0 120px"}}>
            <div className="inner-col">
                <SectionTitle align={true}  beforeDesc={'야나두 야나두'} title={'Swiper Library 사용'} afterDesc={''}/>
                <Swiper
                    className='swiper-container'
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSwiper={(swiper) => console.log(swiper,'zzz')}
                    onSlideChange={() => console.log("slide change")}
                >
                    {SlideList && SlideList.length > 0 && (
                        SlideList.map((item,idx) => {
                            console.log(item)
                            return (

                                <SwiperSlide key={idx}>
                                    <a href={item.link} target="_blank">
                                    <VisualTitle>
                                        <VisualDesc>{item.desc}</VisualDesc>
                                        {item.title}
                                    </VisualTitle>
                                    <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    )}
                </Swiper>
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
export default VisualSlide2;
