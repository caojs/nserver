import React, { Component } from 'react'
import { connect } from 'redux'
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
            <div>
                <FilterZone/>
            </div>
        )
    }
}

export default Filter