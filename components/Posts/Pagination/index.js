import Pagination from '~/components/Pagination'

function queryUrl(page) {
  return {
    pathname: '/posts',
    query: { page }
  };
}

function asUrl(p) {
  return {
    pathname: '/tin-tuc',
    query: p === 0 ? {} : { p }
  }
}

export default function PostsPagination(props) {
  let {
    totalPage,
    page
  } = props;
  
  page = parseInt(page)

  return (
    <Pagination totalPage={totalPage} page={page} asUrl={asUrl} queryUrl={queryUrl}/>
  )
}