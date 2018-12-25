import Link from 'next/link'
import cn from 'classnames'
import { range, clamp } from 'lodash'

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

function getPages(page, totalPage) {
  const step = 1;
  const first = 0
  const last = totalPage - 1 || 0

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

export default function Pagination(props) {
  let {
    totalPage,
    page,
    getAs,
    getHref
  } = props;

  if (!getAs) {
    getAs = getHref
  }
  
  page = parseInt(page)

  const pages = getPages(page, totalPage)
  const isFirstPage = page === 0
  const isLastPage = page === totalPage - 1

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <PreviousButton
        currentPage={page}
        isDisabled={isFirstPage}
        getAs={getAs}
        getHref={getHref}/>

      <NextButton
        currentPage={page}
        isDisabled={isLastPage}
        getAs={getAs}
        getHref={getHref}/>

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
              <Link as={getAs(bage)} href={getHref(bage)}>
                <a className={cn("pagination-link", { "is-current": page === bage })}>
                  {bage + 1}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}