import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import "./styles.css";
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
        <div className="membership-col" style={{margin:"0 0 170px"}}>
            <div className="inner-col" style={{width:"80%",maxWidth: "1275px", margin:"0 auto"}}>
            {/*<div className="inner-col">*/}
                <SectionTitle  align={true}  beforeDesc={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?'} title={'야나두 추천 멤버쉽'} afterDesc={''}/>
                <>
                    <Swiper
                        slidesPerView={2.5}
                        // slidesPerView={3.5}
                        pagination={{
                        "clickable": true
                        }}
                        className='swiper-container'
                        spaceBetween={30}
                        grabCursor={true}

                        // centeredSlides={true}
                        // onSwiper={(swiper) => console.log(swiper,'zzz')}
                        // onSlideChange={() => console.log("slide change")}
                        // breakpoints={{
                        //     // when window width is >= 640px
                        //     640: {
                        //         slidesPerView: 1,
                        //         // width:280,
                        //         // height:220
                        //     },
                        //     // when window width is >= 768px
                        //     768: {
                        //         slidesPerView: 2,
                        //         // width:280,
                        //         // height:220
                        //     },
                        // }}
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
                                                        <div className="price">
                                                            <span>{item.originprice}</span>
                                                            <span className="percent">{item.salepercent}</span>
                                                            <span className="salePrice">{item.saleprice}</span>
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
  position:relative;
  width:506px;
  height:323px;
  padding:30px 20px;
  background:#dadada;
  border-radius:5px;
  border:1px solid #595454;
  box-sizing: border-box;
`;

const ItemName = styled.div`
  font-size:25px;
  font-weight:300;
  strong {
    display:block;
    font-weight:800
  }
`;
const ItemPrice = styled.div`
  position:absolute; 
  bottom:30px;
  right:20px;
  text-align:right;
  letter-spacing: -1px;
  .price span:first-child {
    display:block;
    font-size:20px;
    color:#111;
    text-decoration: line-through;
  }
  .price .percent {
    display:inline-block;
    margin:0 10px 0 0;
    font-weight:800;
    color:#ff0000;
    font-size:28px;
  }
  .price .salePrice {
    
    font-weight:800;
    color:#000;
    font-size:28px;
  }
`;
export default MembershipSlide;