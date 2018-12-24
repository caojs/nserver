import React, { Component } from 'react'
import Router from 'next/router'
import { map, fromPairs, cloneDeep, pick, omitBy } from 'lodash'
import { Formik, Form } from 'formik'
import queryString from 'query-string'

import Layout from '~/components/Layout'
import SearchTicker from './SearchTicker'
import Order from './Order'
import Signal from './Signal'
import FilterZone from './FilterZone'

function toUrl(values) {
    let {
        filter,
        order,
        ...rest
    } = values

    filter = map(omitBy(filter, v => !v), (v, k) => `${k}_${v}`)
    filter.sort()
    filter = filter.join(',')

    order = order.join('_')

    const f = omitBy({
        filter,
        order,
        ...rest
    }, (value) => !value)

    return queryString.stringify(f)
}

class Filter extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    static async getInitialProps({ query }) {
        let {
            page = 0,
            search = '',
            filter,
            order,
            signal
        } = query

        filter = filter ?
            fromPairs(filter
                .split(',')
                .map(f => f.split('_'))
                .filter(fs => fs.length > 1 && !!fs[fs.length - 1])
                .map(fs => [fs.slice(0, -1).join('_'), fs[fs.length - 1]])) :
            {}

        if (!order || order.split('_').length < 2) {
            order = ['ticker', 'asc']
        }
        else {
            order = order.split('_')

            const value = order.pop()
            const base = order.join('_')
            order = [base, value]
        }

        const form = {
            filter,
            order,
            search,
            signal
        }

        return {
            ...form,
            queryUrl: toUrl(form)
        }
    }

    onSubmit(values) {
        const { queryUrl } = this.props
        const form = pick(values, ['filter', 'order', 'signal', 'search'])
        const query = toUrl(form)

        if (queryUrl !== query) {
            Router.push('/filter?' + query)
        }
    }

    render() {
        const {
            filter,
            search,
            order,
            signal,
            queryUrl,
        } = this.props

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                    <Formik
                        key={queryUrl}
                        initialValues={{
                            filter,
                            search,
                            order,
                            signal
                        }}
                        onSubmit={this.onSubmit}
                        render={(props) => {
                            return <Form>
                                <div className="columns">
                                    <div className="column">
                                        <Order/>
                                    </div>
                                    <div className="column">
                                        <Signal/>
                                    </div>
                                    <div className="column">
                                        <SearchTicker/>
                                    </div>
                                </div>
                                <FilterZone/>
                                <button className="button is-primary" type="submit">Submit</button>
                            </Form>
                        }}/>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Filter