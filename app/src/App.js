import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult/SearchResults'
import info from './data/superheroes.json'
import TagsFilter from './components/Tags/TagsFilter'

function App() {
  const [searchText, setSearchText] = useState('')
  const [tagList, setTagList] = useState([])

  const uniqueTags = tagList.filter(function (elem, pos) {
    return tagList.indexOf(elem) == pos
  })
  const data = info

  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar setSearchText={setSearchText} />

        <div className="tag-List">
          {uniqueTags.map((tag, index) => (
            <TagsFilter tag={tag} index={index} />
          ))}
        </div>
        <div className="card">
          <SearchResult
            data={data}
            searchText={searchText}
            setTagList={setTagList}
            tagList={tagList}
          />
        </div>
      </div>
    </div>
  )
}

export default App
