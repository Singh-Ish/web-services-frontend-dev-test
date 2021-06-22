import React from 'react'

function SearchBar(props) {
  const { handleChange, searchText } = props
  return (
    <>
      <div>
        <input
          id="searchBar"
          type="search"
          placeholder="Search your superhero "
          onChange={handleChange}
          value={searchText}
        />
      </div>
    </>
  )
}

export default SearchBar
