import Link from 'next/link'

export default function PreviousButton(props) {
  const {
    currentPage,
    isDisabled,
    getAs,
    getHref
  } = props

  const a = <a className="pagination-previous" disabled={isDisabled}>Previous</a>
  
  return isDisabled ?
    <>{a}</> :
    <Link as={getAs(currentPage - 1)} href={getHref(currentPage - 1)}>{a}</Link>
}