import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResults'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar />
        <SearchResult />
      </div>
    </div>
  )
}

export default App
