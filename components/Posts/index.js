import React, { Component } from 'react'
import styled from 'styled-components'

import request from '~/request'
import Layout from '~/components/Layout'
import NewsList from '~/components/Home/News/NewsList'
import Pagination from './Pagination'

const Heading = styled.div`
    margin-bottom: 45px;
    text-align: center;
`;

const H = styled.h3`
    margin-bottom: 0.4rem;
    font-size: 1.9rem;
    font-weight: 700;
`;

const P = styled.p`
    font-size: 1.2rem;
    color: #777;
`;

const List = styled.div`
  margin-bottom: 30px;
`;

const limit = 4;

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
      <Layout>
        <section className="section">
          <div className="container">
            <Heading>
              <H>Tin Tức</H>
              <P>Cập nhật tin tức mới nhất</P>
            </Heading>
            <List>
              <NewsList news={list}/>
            </List>
            {totalPage > 1 && <Pagination totalPage={totalPage} page={page}/>}
          </div>
        </section>
      </Layout>
    )
  }
}