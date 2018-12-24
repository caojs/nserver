import { Component } from 'react'
import { Field } from 'formik'

const orderBase = [
  { label: 'Ticker', value: 'ticker' },
  { label: 'Company', value: 'company' },
]

export default class Order extends Component {
  render() {
    return (
      <div>
        <label className="label">Order</label>
        <div className="field has-addons">
          <div className="control">
            <div className="select">
              <Field name="order[0]"
                component="select">
                {orderBase.map(base => (
                  <option key={base.value} value={base.value}>{base.label}</option>
                ))}
              </Field>
            </div>
          </div>
          <div className="control">
            <div className="select">
              <Field name="order[1]"
                component="select">
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </Field>
            </div>
          </div>
        </div>
      </div>
    )
  }
}