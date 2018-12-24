import React, { Component } from 'react'
import cn from 'classnames'
import { connect, getIn } from 'formik'

import djson from './json/descriptive.json'
import fjson from './json/fundamental.json'
import tjson from './json/technical.json'

import FilterCounter from './FilterCounter'
import FilterTab from './FilterTab'

const D = "desctiptive"
const F = "fundamental"
const T = "technical"

class FilterSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: D
    }
  }

  onChange(active) {
    if (active !== this.state.active) {
      this.setState({
        active
      })
    }
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={cn({"is-active": active === D})}>
              <a onClick={() => this.onChange(D)}>
                Descriptive
                <FilterCounter filters={djson}/>
              </a>
            </li>
            <li className={cn({"is-active": active === F})}>
              <a onClick={() => this.onChange(F)}>
                Fundamental
                <FilterCounter filters={fjson}/>
              </a>
            </li>
            <li className={cn({"is-active": active === T})}>
              <a onClick={() => this.onChange(T)}>
                Technical
                <FilterCounter filters={tjson}/>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className={cn({"is-hidden": active !== D})}>
            <FilterTab filters={djson}/>
          </div>
          <div className={cn({"is-hidden": active !== F})}>
            <FilterTab filters={fjson}/>
          </div>
          <div className={cn({"is-hidden": active !== T})}>
            <FilterTab filters={tjson}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(FilterSelection)