import React from 'react';
import VisualSlide from "../components/visualSlide";
import ClassSlide from "../components/classSlide";
import MembershipSlide from "../components/membershipSlide";

const Contents = () => {
    return (
        <div>
            <VisualSlide/>
            <ClassSlide/>
            <MembershipSlide/>
        </div>
    );
};

export default Contents;