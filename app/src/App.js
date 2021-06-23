import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult/SearchResults'
import data from './data/superheroes.json'

function App() {
  const [searchText, setSearchText] = useState('')
  const [tagList, setTagList] = useState([])

  const uniqueTags = tagList.filter(function (elem, pos) {
    return tagList.indexOf(elem) == pos
  })

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar setSearchText={setSearchText} />

        <div className="tag-List">
          {uniqueTags.map((tag, index) => (
            <span className="tagListItem" key={index}>
              {tag}
            </span>
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
