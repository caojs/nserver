import React, { Component } from 'react'
import { connect } from 'redux'

import Layout from '~/components/Layout'
import FilterZone from './FilterZone'

class Filter extends Component {
    static async getInitialProps({ query }) {
        return {
            query
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <FilterZone/>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Filter