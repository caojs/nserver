import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding-top: 1rem;
    padding-bottom: 1rem;
`
export default class Foot extends Component {
    render() {
        return (
            <Wrapper className="section has-background-black-bis">
                <div className="container">
                    <p className="has-text-white-ter">Copyright 2019</p>
                </div>
            </Wrapper>
        )
    }
}