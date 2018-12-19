import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    max-height: 350px;
    overflow: hidden;
`;

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    text-align: center;
`;

const H = styled.h2`
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 1.2;
`;

const P = styled.p`
    font-size: 1.75rem;
    line-height: 1.2;
`;

const Figure = styled.figure`
    position: relative;
    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #080808;
        opacity: 0.4;
    }
`;

export default class Banner extends Component {
    render() {
        return (
            <Wrapper>
                <Info>
                    <H>XQuant</H>
                    <P>Everything must be quantified</P>
                </Info>
                <Figure className="image">
                    <img src="/static/banner.jpg"/>
                </Figure>
            </Wrapper>
        )
    }
}