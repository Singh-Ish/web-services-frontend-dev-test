import React from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data } = props

  return (
    <>
      {data.map((item) => (
        <SearchResultItem item={item} />
      ))}
    </>
  )
}

export default SearchResult
