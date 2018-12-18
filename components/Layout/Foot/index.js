import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem 0;
`
export default class Foot extends Component {
    render() {
        return (
            <Wrapper className="has-background-black-bis">
                <div className="container">
                    <p className="has-text-white-ter">Copyright 2019</p>
                </div>
            </Wrapper>
        )
    }
}