import React, { useState, useEffect } from 'react';
import Title from './Title';
import axios from 'axios';

const Faqcard = () => {
    let [faqList, faqData] = useState([]);

    const faqListApi = () => {
        axios
            .get('https://hyunsusora.github.io/jsondata/guide.json')
            .then(function (result) {
                faqData(result.data);
                console.log('응답 성공');
            })
            .catch(function (error) {
                console.log('응답 실패');
            });
    };

    useEffect(async () => {
        faqListApi();
    }, []);

    return (
        <>
            <section className="section-faq">
                <Title
                    title="상위 FAQ: Jira Software Cloud가 나에게 도움이 될까요?"
                    desc="클라우드 개인 정보 보호, 보안, 안정성 및 규정 준수에 대한 Atlassian의 상위 FAQ를 확인하세요. 규정 준수 인증 및 세부 정보는 신뢰 사이트 를 참조하세요."
                />
                <ul>
                    {faqList &&
                    faqList.map((list, index) => {
                        return (
                            <li key={index}>
                                <img src={list.imageURL} alt="" />
                                <strong>{list.title}</strong>
                                <p>{list.info}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};

export default Faqcard;



////////////////////


import React from 'react';

const Title = ({ title, desc }) => {
    return (
        <>
            <strong className='title'>{title}</strong>
            <p className='desc'>{desc}</p>
        </>
    );
};

export default Title;