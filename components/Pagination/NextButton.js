import Link from 'next/link'

export default function PreviousButton(props) {
  const {
    currentPage,
    isDisabled,
    asUrl,
    queryUrl
  } = props

  const a = <a className="pagination-next" disabled={isDisabled}>Next</a>
  
  return isDisabled ?
    <>{a}</> :
    <Link as={asUrl(currentPage + 1)} href={queryUrl(currentPage + 1)}>{a}</Link>
}