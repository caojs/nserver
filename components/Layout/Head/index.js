import React, { Component } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen
        }));
    }

    render() {
        const { isOpen } = this.state;

        return (
            <Wrapper>
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a>
                        </Link>

                        <a role="button" className={cn("navbar-burger burger", { "is-active": isOpen })} aria-label="menu" aria-expanded="false" onClick={this.toggle}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className={cn("navbar-menu", { "is-active": isOpen })}>
                        <div className="navbar-start">
                            <a className="navbar-item"> Home </a>
                            <a className="navbar-item"> News </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link"> More </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item"> About </a>
                                    <a className="navbar-item"> Jobs </a>
                                    <a className="navbar-item"> Contact </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item"> Report an issue </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary"> <strong>Sign up</strong> </a>
                                    <a className="button is-light"> Log in </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            </Wrapper>
        )

    }
}