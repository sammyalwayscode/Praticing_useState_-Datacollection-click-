import React, { useState } from 'react'

function Clicking() {
  const [tap, setTap] = useState(false)
  const clickTap = () => {
    setTap(!tap)
  }
  console.log(tap)
  return (
    <div>
      <button onClick={clickTap}>Tap Me</button>
      {
        tap ? <h1>You Just taped Me</h1> : null
      }
    </div>
  )
}

export default Clicking
