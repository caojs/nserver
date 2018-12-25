import Pagination from '~/components/Pagination'

function getHref(page) {
  const pathname = '/news'

  return page > 0 ?
    {
      pathname,
      query: { page }
    } :
    pathname;
}

export default function NewsPagination(props) {
  let {
    totalPage,
    page
  } = props;
  
  page = parseInt(page)

  return (
    <Pagination
      totalPage={totalPage}
      page={page}
      getHref={getHref}/>
  )
}