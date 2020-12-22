import React, { useState } from 'react'
import OpenThis from './OpenThis'

function OpenPage() {
  const [open, setOpen] = useState(false)
  const clickOpen = () => {
    setOpen(!open)
  }
  console.log(open)
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      {
        open ? null : <button onClick={clickOpen}>Click To Open</button>
      }
      <OpenThis open={open} setOpen={setOpen} />

    </div>
  )
}

export default OpenPage
