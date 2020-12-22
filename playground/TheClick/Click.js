import React, { useState } from 'react'
import ThisPlace from '../PraticingHooks/ThisPlace'

function Click() {

  const [justClick, setJustClick] = useState(false)

  console.log(justClick)

  const clicking = (e) => {
    setJustClick(!justClick)
  }

  return (
    <div>
      <button onClick={clicking} >Just Click ME</button>

      <ThisPlace justClick={justClick} setJustClick={setJustClick} />
    </div >
  )
}

export default Click
