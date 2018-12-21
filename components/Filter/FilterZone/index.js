import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import FilterSelection from './FilterSelection'

export default class FilterZone extends Component {
    render() {
        return (
        <div>
            <Formik
                onSubmit={value => console.log(value)}
                render={(props) => {
                    return (
                        <Form>
                            <FilterSelection/>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}/>
        </div>
        )
    }
}