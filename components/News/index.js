import React, { Component } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import request from '~/request'
import Layout from '~/components/Layout'
import NewsList from '~/components/Home/News/NewsList'
import Pagination from './Pagination'
import Error from '~/pages/_error'

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

export default class News extends Component {
  static async getInitialProps({ query }) {
    const { page = 0 } = (query || {})

    try {
      const res = await Promise.all([
        request.get('/posts/count'),
        request.get('/posts', {
          params: {
            _limit: limit,
            _start: page * limit
          }
        })
      ])

      const [ count, list ] = res

      return {
        count,
        list,
        page
      }
    }
    catch (error) {
      return ({ error })
    }
  }

  render() {
    const {
      error,
      page,
      count,
      list
    } = this.props;

    if (error) {
      const statusCode = get(error, 'statusCode', 500)
      return <Error statusCode={statusCode}/>
    }

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