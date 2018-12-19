import React from 'react'
import styled from 'styled-components'

import NewsItem from './NewsItem';

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

const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    overflow: hidden;
`;

const Item = styled(NewsItem)`
    flex: 1 1 350px;
    margin: 0.75rem;
`;

export default function News({ news }) {
    return (
        <section className="section">
            <Heading>
                <H>News</H>
                <P>We promise to keep you updated with our blog posts.</P>
            </Heading>
            <div className="container">
                <List>
                    {news.map((item, id) => (
                        <Item key={id} {...item}/>
                    ))}
                </List>
            </div>
        </section>
    )
}