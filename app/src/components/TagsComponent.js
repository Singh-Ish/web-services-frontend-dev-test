import React from 'react'

function TagsComponent(props) {
  const { tag } = props

  return (
    <>
      <span className="tagItem">{tag}</span>
    </>
  )
}

export default TagsComponent
