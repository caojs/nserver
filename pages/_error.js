import { Component } from 'react'
import Error from '~/components/Error'

export default class extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Error statusCode={this.props.statusCode}/>
    )
  }
}