import React, { Component } from 'react';

import Layout from '../Layout';
import Banner from './Banner'
import Features from './Features';
import News from './News';

import request from '~/request';

export default class Home extends Component {
    static async getInitialProps() {
        return request.get('/posts', { params: {_limit: 3} })
            .then(res => ({ news: res }))
            .catch(e => Promise.resolve({ news: []}));
    }

    render() {
        const {
            news
        } = this.props;

        return (
            <Layout>
                <Banner/>
                <Features/>
                {news.length ? <News news={news}/> : null}
            </Layout>
        )
    }
}