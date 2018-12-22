import React, { Component } from 'react'
import cn from 'classnames'
import { connect, getIn } from 'formik'

import Descriptive from './Descriptive'
import Fundamental from './Fundamental'
import Technical from './Technical'

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

    const { formik } = this.props
    const descriptive = getIn(formik.values, 'filter.descriptive')

    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={cn({"is-active": active === D})}>
              <a onClick={() => this.onChange(D)}>Descriptive</a>
            </li>
            <li className={cn({"is-active": active === F})}>
              <a onClick={() => this.onChange(F)}>Fundamental</a>
            </li>
            <li className={cn({"is-active": active === T})}>
              <a onClick={() => this.onChange(T)}>Technical</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={cn({"is-hidden": active !== D})}>
            <Descriptive/>
          </div>
          <div className={cn({"is-hidden": active !== F})}>
          <Fundamental/>
          </div>
          <div className={cn({"is-hidden": active !== T})}>
          <Technical/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(FilterSelection)