import React from 'react';
import axios from "axios";
import styled from "styled-components";
import SectionTitle from '../common/sectionTitle';
const ClassSlide = () => {
    return (
        <div className="classSlide-col">
            <div className="inner-col">
                <SectionTitle  inverted ={true}  beforeDesc={'가장 호응이 좋았던!'} title={'Top10 클래스'} afterDesc={''}/>
            </div>
            ClassSlide-test
        </div>
    );
};

export default ClassSlide;