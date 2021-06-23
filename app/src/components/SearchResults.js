import React from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data } = props

  return (
    // <> need to add unique key
    <>
      {data.map((item) => (
        <SearchResultItem item={item} />
      ))}
    </>
  )
}

export default SearchResult
