import React from 'react'
import styled from 'styled-components'

import NewsList from './NewsList'

const Heading = styled.div`
    margin-bottom: 45px;
    text-align: center;
`;

const H = styled.h3`
    font-size: 1.9rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
`;

const P = styled.p`
    font-size: 1.2rem;
    color: #777;
`;

export default function News({ news }) {
    return (
        <section className="section">
            <Heading>
                <H>Tin tức</H>
                <P>Thông tin nhanh và mới nhất được cập nhật hàng ngày.</P>
            </Heading>
            <div className="container">
                <NewsList news={news}/>
            </div>
        </section>
    )
}