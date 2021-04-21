import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';
const ClassSlide = () => {
    return (
        <div className="classSlide-col">
            <div className="inner-col">
                <SectionTitle title={'야나두 추천 클래스'} desc={'내가 듣고 싶은 클래스만 묶어서 들을 수 있다?'}/>
            </div>
            ClassSlide-test
        </div>
    );
};

export default ClassSlide;