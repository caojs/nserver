import React, { Component } from 'react'
import FilterTab from '../FilterTab'

const filters = [{
    "label": "Exchange",
    "name": "exchange",
    "options": [{
        "label": "HOSE",
        "value": "hose"
    },
    {
        "label": "HNX",
        "value": "hnx"
    },
    {
        "label": "UPCOM",
        "value": "upcom"
    }]
}]

export default class Fundamental extends Component {
    render() {
        return (
            <FilterTab filters={filters} type="fundamental"/>
        )
    }
}