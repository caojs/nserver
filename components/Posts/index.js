import React, { Component } from 'react'
import request from '~/request'

import Pagination from './Pagination'

const limit = 1;

export default class Posts extends Component {
  static async getInitialProps({ query }) {
    const { page = 0 } = (query || {})

    const count = await request.get('/posts/count')
    const list = await request.get('/posts', {
      params: {
        _limit: limit,
        _start: page * limit
      }
    })

    return {
      count,
      list,
      page
    }
  }

  render() {
    const {
      page,
      count,
      list
    } = this.props;

    const totalPage = Math.ceil(count/limit)

    return (
      <div>
        <Pagination totalPage={totalPage} page={page}/>
      </div>
    )
  }
}