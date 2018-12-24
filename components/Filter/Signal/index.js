import { Component } from 'react'
import { Field } from 'formik'

const signals = [
  { label: 'Top Gainers', value: 'top_gainers' },
  { label: 'Top Losers', value: 'top_losers' }
]

export default class Signal extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Signal</label>
          <div className="control">
            <div className="select">
              <Field name="signal"
                component="select">
                <option value="">None</option>
                {signals .map(signal => (
                  <option key={signal.value} value={signal.value}>{signal.label}</option>
                ))}
              </Field>
            </div>
          </div>
        </div>
      </div>
    )
  }
}