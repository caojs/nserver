import React, { Component } from 'react'
import {Field} from 'formik'

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

export default class Descriptive extends Component {
    render() {
        console.log(filters)
        return (
            <div>
                abc
                {filters.map(({ label, name, options }) => {
                    return (
                    <div className="field" key={name}>
                        <label className="label">{label}</label>
                        <div className="select">
                            <Field component="select" name={`descriptive.${name}`}>
                                <option value="">All</option>
                                {options.map(option => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </Field>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}