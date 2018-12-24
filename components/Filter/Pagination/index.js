import { Component } from 'react'
import Pagination from '~/components/Pagination'

export default function FilterPagination(props) {
  const {
    totalPage,
    page
  } = this.props

  return (
    <Pagination totalPage={totalPage} page={page} asUrl={} queryUrl={}/>
  )
}