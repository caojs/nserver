import { Component } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { getIn, connect } from 'formik'

const Tag = styled.span`
  &&& {
    margin-left: 5px;
    height: 1.1rem;
    line-height: 1;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

class Counter extends Component {
  render() {
    const {
      className,
      formik,
      filters
    } = this.props
    const inBag = getIn(formik.values, 'filter')
    const count = filters
        .filter(({ name }) => !!inBag[name])

    return count.length ?
      <Tag className={cn("tag is-warning", className)}>{count.length}</Tag> :
      null
  }
}
export default connect(Counter)