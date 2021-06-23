import React from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data, searchText, setTagList, tagList } = props

  // filtering the content based on the search textto be displayed ; this filters by name and fullname
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
    <>
      {filterData.map((item) => (
        <div key={item.id}>
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
