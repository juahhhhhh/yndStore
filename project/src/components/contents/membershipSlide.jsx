import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';
const MembershipSlide = () => {
    return (
        <div className="membership-col">
            <div className="inner-col">
                <sectionTitle title={'야나두 추천 멤버쉽'} desc={'내가 듣고 싶은 클래스만 묶어서 들을 수 있다?'}/>
            </div>
            MembershipSlide-test
        </div>
    );
};

export default MembershipSlide;