import React from 'react'

function SearchBar(props) {
  const { searchText, setSearchText } = props

  return (
    <>
      <div>
        <input
          id="searchBar"
          type="search"
          placeholder="Search your superhero "
          onChange={(event) => {
            setSearchText(event.target.value)
          }}
        />
      </div>
    </>
  )
}

export default SearchBar
