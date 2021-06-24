import React from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data, searchText, setTagList, tagList } = props

  const selectedTag = 'love'

  // filtering the content based on the search textto be displayed ; this filters by name and fullname
  const filterData = data.filter((item) => {
    if (searchText == '') {
      // if (data.itemTags.filter(data.itemTags == selectedTag)) {
      //   return item
      // } else {
      return item
      // }
    } else if (
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.biography.fullName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return item
    }
  })

  return (
    <>
      {filterData.map((item, index) => (
        <div key={item.id}>
          <SearchResultItem
            item={item}
            setTagList={setTagList}
            tagList={tagList}
            data={data}
            index={index}
          />
        </div>
      ))}
    </>
  )
}

export default SearchResult
