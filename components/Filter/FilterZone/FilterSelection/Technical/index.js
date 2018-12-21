import React, { Component } from 'react'
import FilterTab from '../FilterTab'

const filters = [{
    "label": "RSI",
    "name": "rsi",
    "options": [{
        "label": "Under 30",
        "value": "u30"
    },
    {
        "label": "30 to 70",
        "value": "30to70"
    }, 
    {
        "label": "Over 70",
        "value": "o70"
    }]
}]

export default class Technical extends Component {
    render() {
        return (
            <FilterTab filters={filters} type="technical"/>
        )
    }
}