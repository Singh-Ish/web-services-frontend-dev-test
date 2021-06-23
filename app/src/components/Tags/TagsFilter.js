import React, { useState } from 'react'
import '../../styles/tags.css'

function TagsFilter(props) {
  const { tag, index } = props
  const ClickedTag = () => {
    setIsClicked(!isClicked)
  }

  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <span
        style={{ background: isClicked ? 'green' : 'black' }}
        className="tagListItem"
        key={index}
        onClick={ClickedTag}
      >
        {tag}
      </span>
    </>
  )
}

export default TagsFilter
