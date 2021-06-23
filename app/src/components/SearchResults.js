import React from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data, searchText, setTagList, tagList } = props

  const filterData = data.filter((item) => {
    if (searchText == '') {
      return item
    } else if (
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.biography.fullName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return item
    }
  })

  return (
    // <> need to add unique key
    <>
      {filterData.map((item, index) => (
        <div index={item.id}>
          <SearchResultItem
            item={item}
            setTagList={setTagList}
            tagList={tagList}
          />
        </div>
      ))}
    </>
  )
}

export default SearchResult
