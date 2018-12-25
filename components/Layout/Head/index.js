import React, { Component } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.section`
    padding-top: 0;
    padding-bottom: 0;
    background-color: white;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;

const Logo = styled.a`
    font-size: 1.2rem;
    font-weight: 700;
`;

const Tag = styled.span`
    margin-left: 6px;
    height: 1.8rem;
    font-size: 0.75rem;
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
            <Wrapper className="section">
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link href="/">
                            <Logo className="navbar-item">
                                XQuant
                            </Logo>
                        </Link>

                        <a role="button" className={cn("navbar-burger burger", { "is-active": isOpen })} aria-label="menu" aria-expanded="false" onClick={this.toggle}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className={cn("navbar-menu", { "is-active": isOpen })}>
                        <div className="navbar-start">
                            <Link href="/">
                                <a className="navbar-item">Trang chủ</a>
                            </Link>
                            <Link href="/news">
                                <a className="navbar-item">Tin tức</a>
                            </Link>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    Tính năng
                                    <Tag className="tag is-danger">Sắp ra</Tag>
                                </a>

                                <div className="navbar-dropdown">
                                    <Link href="/filter">
                                        <a className="navbar-item">Bộ lọc</a>
                                    </Link>
                                    <Link href="/optimization">
                                        <a className="navbar-item">Tối ưu danh mục</a>
                                    </Link>
                                    <Link href="/backtesting">
                                        <a className="navbar-item">Kiểm định</a>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/education">
                                <a className="navbar-item">Đào tạo</a>
                            </Link>
                            <Link href="/contact">
                                <a className="navbar-item">Liên hệ</a>
                            </Link>
                        </div>

                        <div className="navbar-end is-hidden">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary"> <strong>Đăng ký</strong> </a>
                                    <a className="button is-light">Đăng nhập</a>
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