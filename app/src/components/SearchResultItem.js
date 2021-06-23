import React, { useState } from 'react'

function SearchResultItem(props) {
  const { item } = props
  const [isExpanded, setIsExpanded] = useState(false)

  function handleButtonClick(e) {
    console.log('button in pressed')
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className="searchResult">
        <div className="left">
          <img src={item.images.md} alt="super Hero" />
        </div>
        <div className="right">
          <div className="icon" onClick={handleButtonClick}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
          </div>
          <h1> {item.name} </h1>
          <div className="stats">
            <div>Full Name : {item.biography.fullName} </div>
            <div> Race : {item.appearance.race} </div>
            <div>Alignment: {item.biography.alignment} </div>
            <div>Publisher: {item.biography.publisher} </div>
          </div>

          {isExpanded && (
            <div>
              <h3>Powers</h3>
              <div>Intelligence: {item.powerstats.intelligence} </div>
              <div>strength: {item.powerstats.strength} </div>
              <div>speed: {item.powerstats.speed} </div>
              <div>durability: {item.powerstats.durability} </div>
              <div>power: {item.powerstats.power} </div>
              <div>combat: {item.powerstats.combat} </div>

              <h3> Tags </h3>
              <div className="tagInput">
                <input id="tagBar" type="tag" placeholder="Add Tag " />
                <button className="tagButton">Add Tag</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchResultItem
