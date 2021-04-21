import React from 'react';
import styled from "styled-components";

const SectionTitle = ({ title, desc }) => {
    return (
        <>
            <Title className='title'>{title}</Title>
            <Desc className='desc'>{desc}</Desc>
        </>
    );
};
export default SectionTitle;

const Title = styled.strong`
font-size:20px;
`;
const Desc = styled.p`
font-size:10px;
`;