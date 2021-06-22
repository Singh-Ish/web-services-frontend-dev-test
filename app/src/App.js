import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResults'
import data from './data/superheroes.json'

function App() {
  const [searchText, setSearchText] = useState('')
  function handleChange(e) {
    const searchTerm = e.target.value
    console.log(searchTerm)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResult data={data} />
      </div>
    </div>
  )
}

export default App
