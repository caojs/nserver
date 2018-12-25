import Pagination from '~/components/Pagination'

function getHref(page) {
  return {
    pathname: '/news',
    query: { page }
  };
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