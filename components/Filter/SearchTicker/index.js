import React, { Component } from 'react'
import { Field } from 'formik'
import { FaSearch } from 'react-icons/fa'

export default class SearchTicker extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Search</label>
          <p className="control has-icons-left">
            <Field className="input" name="search" placeholder="Ticker"/>
            <span className="icon is-small is-left">
              <FaSearch/>
            </span>
          </p>
        </div>
      </div>
    )
  }
}