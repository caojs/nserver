import React, { Component } from 'react';

import Layout from '../Layout';
import Banner from './Banner'
import Features from './Features';

export default function Home() {
    return (
        <Layout>
            <Banner/>
            <Features/>
        </Layout>
    )
}