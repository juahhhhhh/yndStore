import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost} from "@fortawesome/free-solid-svg-icons";
const SectionTitle = ({ title, desc }) => {
    return (
        <TitleWrap>
            <FontAwesomeIcon icon={faGhost} />
            <Title className='title'>{title}</Title>
            <Desc className='desc'>{desc}</Desc>
        </TitleWrap>
    );
};
export default SectionTitle;
const TitleWrap = styled.div`
font-size:20px;
`;
const Title = styled.strong`
font-size:20px;
`;
const Desc = styled.p`
font-size:10px;
`;
