import React from 'react'

function ThisPlace({ justClick, setJustClick }) {
  return (
    <div>
      {
        justClick ? <h1>That's Very Good Sammy The Button Just Worked</h1> : null
      }
    </div>
  )
}

export default ThisPlace
