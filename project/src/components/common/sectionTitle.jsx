import React from 'react';
import Title from '../../styles/title'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGhost} from "@fortawesome/free-solid-svg-icons";
const SectionTitle = ({ beforeDesc, title, afterDesc, type }) => {
    return (
        <Title type={type}>
            {beforeDesc} <br/>
            <strong style={{fontWeight:"900"}}>{title}</strong>
            {afterDesc}
        </Title>
    );
};
export default SectionTitle;
