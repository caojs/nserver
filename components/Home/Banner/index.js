import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
`;

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
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
        opacity: 0.3;
    }
`;

export default class Banner extends Component {
    render() {
        return (
            <Wrapper>
                <Info>
                    <h2>XQuant</h2>
                    <p>Everything must be quantified</p>
                </Info>
                <Figure className="image">
                    <img src="/static/banner.jpg"/>
                </Figure>
            </Wrapper>
        )
    }
}