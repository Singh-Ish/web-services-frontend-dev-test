import React from 'react'

function SearchResultItem(props) {
  const { item } = props

  console.log(item)
  return (
    <>
      <div className="searchResult">
        <div className="left">
          <img src={item.images.md} alt="super Hero" />
        </div>
        <div className="right">
          <h1> {item.name} </h1>
          <div className="stats">
            <div>Full Name : {item.biography.fullName} </div>
            <div> Race : {item.appearance.race} </div>
            <div>Alignment: {item.biography.alignment} </div>
            <div>Publisher: {item.biography.publisher} </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResultItem
