import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';
const MembershipSlide = () => {
    const [MbList, setMbList] = useState([]);
    const visualList  = () => {
        axios.get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData7.json')
            .then(function (response) {
                setMbList(response.data);
                console.log('setMbList',response);
            })
            .catch(function (error) {
                console.log('setMbList',error);
            });
    };
    useEffect(async () => visualList(), []);

    return (
        <div className="membership-col">
            <div className="inner-col">
                <SectionTitle  align={true}  beforeDesc={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?'} title={'야나두 추천 멤버쉽'} afterDesc={''}/>

                <>
                    <Swiper
                        breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}
                        className='swiper-container'
                        spaceBetween={10}
                        slidesPerView={3}
                        centeredSlides={true}
                        onSwiper={(swiper) => console.log(swiper,'zzz')}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <MembershipWrap>
                            {MbList && MbList.length > 0 && (
                                MbList.map((item,idx) => {
                                    console.log(item)
                                    return (
                                        <SwiperSlide key={idx}>
                                            <MembershipList>
                                                <a href={item.link} target="_blank" key={idx} >
                                                    <ItemName>{item.desc}<strong>{item.title}</strong></ItemName>
                                                    <ItemPrice>
                                                        <div className="percent"><span>{item.salepercent}</span></div>
                                                        <div className="price">
                                                            <span>{item.saleprice}</span>
                                                            <span>{item.originprice}</span>
                                                        </div>
                                                    </ItemPrice>
                                                </a>
                                            </MembershipList>
                                        </SwiperSlide>
                                    )
                                })
                            )}
                        </MembershipWrap>




                    </Swiper>
                </>
            </div>

        </div>
    );
};
const MembershipWrap = styled.div`
  
`;

const MembershipList = styled.div`
  height:150px;
  padding:30px 20px;
  border-radius:5px;
  border:1px solid #ddd;
  box-sizing: border-box;
`;

const ItemName = styled.div`
  font-size:15px;
  font-weight:300
`;
const ItemPrice = styled.div`

`;
export default MembershipSlide;