import React, { Component } from 'react'
import FilterTab from '../FilterTab'

const filters =  [{
    "label": "Debt/Total Asset",
    "name": "debt_total",
    "options": [
    {
        "label": "Under 30",
        "value": "u30"
    },
    {
        "label": "30 to 50",
        "value": "30to50"
    },
    {
        "label": "50 to 70",
        "value": "50to70"
    },
    {
        "label": "Over 70",
        "value": "o70"
    }]
}]

export default class Descriptive extends Component {
    render() {
        return (
            <FilterTab filters={filters} type="descriptive"/>
        )
    }
}