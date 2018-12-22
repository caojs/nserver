import React, { Component } from 'react'
import styled from 'styled-components'
import {Field} from 'formik'

const StyledSelect = styled.div`
    width: 100%;
`;

const StyledField = styled(Field)`
    width: 100%;
`;

export default class FilterTab extends Component {
    render() {
        const {
            filters,
            type
        } = this.props;

        return (
            <div className="columns is-multiline">
                {filters.map(({ label, name, options }) => {
                    return (
                        <div className="column is-one-third-tablet is-one-quarter-desktop is-one-fifth-fullhd" key={name}>
                            <div className="field">
                                <label className="label">{label}</label>
                                <StyledSelect className="select">
                                    <StyledField component="select" name={`filter.${type}.${name}`}>
                                        <option value="">All</option>
                                        {options.map(option => (
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        ))}
                                    </StyledField>
                                </StyledSelect>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}