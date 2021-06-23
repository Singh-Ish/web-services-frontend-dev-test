import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResults'
import data from './data/superheroes.json'

function App() {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar setSearchText={setSearchText} />
        <div className="card">
          <SearchResult data={data} searchText={searchText} />
        </div>
      </div>
    </div>
  )
}

export default App
