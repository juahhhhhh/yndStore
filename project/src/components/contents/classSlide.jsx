import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';
const ClassSlide = () => {
    const [Clist, setClist] = useState([]);
    const visualList  = () => {
        axios.get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData7.json')
            .then(function (response) {
                setClist(response.data);
                console.log('setClist',response);
            })
            .catch(function (error) {
                console.log('setClist',error);
            });
    };
    useEffect(async () => visualList(), []);

    return (
        <div className="membership-col">
            <div className="inner-col" style={{width:"80%",maxWidth: "1275px", margin:"0 auto"}}>
                {/*<div className="inner-col">*/}
                <SectionTitle  align={true}  beforeDesc={'가장 호응이 좋았던!'} title={'Top10 클래스'} afterDesc={''}/>
                <>
                    <Swiper
                        slidesPerView={4}
                        pagination={{
                            "clickable": true
                        }}
                        className='swiper-container'
                        spaceBetween={30}
                        grabCursor={true}
                    >
                        <ClassWrap>
                            {Clist && Clist.length > 0 && (
                                Clist.map((item,idx) => {
                                    console.log(item)
                                    return (
                                        <SwiperSlide key={idx}>
                                            <ClassList>
                                                <a href={item.link} target="_blank">
                                                    <div className="topInfo">
                                                        <span>Top 1</span>
                                                        <button>Like</button>
                                                    </div>
                                                    <Picture style={{backgroundImage: `url(` + item.picture + `)`}} />
                                                    <dl>
                                                        <dt>{item.title}</dt>
                                                        <dd>{item.desc}</dd>
                                                    </dl>
                                                </a>
                                            </ClassList>
                                        </SwiperSlide>
                                    )
                                })
                            )}
                        </ClassWrap>




                    </Swiper>
                </>
            </div>

        </div>
    );
};
const ClassWrap = styled.div`

`;

const ClassList = styled.div`
  position:relative;
  width:319px;
  height:442px;
  background:#fff;
  box-sizing: border-box;
  a{display:block; position:relative;}
  .topInfo { position:absolute; top:0; left:0; right:0;
    button {
      
    }
  }
  dl {margin:20px 0}
  dt {margin:0 0 10px; font-size:24px; font-weight:800; color:#000}
  dd {font-size:18px;}
`;

const Picture = styled.div`
  //position:relative;
  width:100%;
  height:0;
  padding:0 0 100%;
  background-position:center;
  background-size:cover;
  background-color:#ddd
`
export default ClassSlide;