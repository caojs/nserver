import Link from 'next/link'
import cn from 'classnames'
import { range, clamp } from 'lodash'

function getPages(page, totalPage) {
  const step = 1;
  const first = 0
  const last = totalPage - 1

  const start = clamp(page - step, first, last)
  const end = start + (step * 2 + 1)

  const prange = range(start, end)
    .filter(value => value >= first && value <= last)
  
  let p = [];
  
  if (prange[0] !== first) {
    p.push(first)
  }

  if (prange[0] - first > 1) {
    p.push(null)
  }

  p = p.concat(prange)

  if (last - prange[prange.length - 1] > 1) {
    p.push(null)
  }

  if (last !== prange[prange.length - 1]) {
    p.push(last)
  }

  return p
}

function queryUrl(page) {
  return '/posts?page=' + page;
}

function asUrl(page) {
  return '/posts/' + page
}

export default function Pagination(props) {
  let {
    totalPage,
    page
  } = props;
  
  page = parseInt(page)

  const pages = getPages(page, totalPage)

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <Link as={asUrl(page - 1)} href={queryUrl(page - 1)}>
        <a className="pagination-previous" disabled={page === 0}>Previous</a>
      </Link>

      <Link as={asUrl(page + 1)} href={queryUrl(page + 1)}>
        <a className="pagination-next" disabled={page === totalPage - 1}>Next page</a>
      </Link>

      <ul className="pagination-list">
        {pages.map((bage, index) => {
          if (bage === null) {
            return (
              <li key={index}>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
            )
          }

          return (
            <li key={index}>
              <Link as={asUrl(bage)} href={queryUrl(bage)}>
                <a className={cn("pagination-link", {
                  "is-current": page === bage
                })}>{bage + 1}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}