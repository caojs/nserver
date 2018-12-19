import React from 'react'
import styled from 'styled-components'

import NewsList from './NewsList'

const Heading = styled.div`
    margin-bottom: 45px;
    text-align: center;
`;

const H = styled.h3`
    font-size: 1.9rem;
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
                <H>News</H>
                <P>We promise to keep you updated with our blog posts.</P>
            </Heading>
            <div className="container">
                <NewsList news={news}/>
            </div>
        </section>
    )
}