import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import Descriptive from './Descriptive'

export default class FilterZone extends Component {
    render() {
        return (
        <div>
            <Formik
                onSubmit={value => console.log(value)}
                render={(props) => {
                    return (
                        <Form>
                            <Descriptive/>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}/>
        </div>
        )
    }
}