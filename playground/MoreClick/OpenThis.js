import React, { useState } from 'react'
import OpenPage from './OpenPage'

function OpenThis({ open, setOpen }) {
  const [secOpen, setSecOpen] = useState(false)

  const handleClick = () => {
    setSecOpen(!secOpen)
  }
  console.log(secOpen)
  return (
    <div>
      {
        open ? <div style={{
          backgroundColor: "blue",
          color: "white",
          height: "100vh",
          width: "100vw",
        }}>
          <h1>We are hear</h1>
          {
            secOpen ? <h2 onClick={handleClick}>X</h2> : <OpenPage />
          }
        </div> : null

      }
    </div>
  )
}

export default OpenThis
