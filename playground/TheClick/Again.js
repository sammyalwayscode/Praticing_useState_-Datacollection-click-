import React, { useState } from 'react'
import One from '../PraticingHooks/One';

function Again() {
  const [show, setShow] = useState(false)
  const clickShow = () => {
    setShow(!show)
  }
  console.log(show);
  return (
    <div>
      <button onClick={clickShow}>CLick</button>
      <One show={show} setShow={setShow} />
    </div>
  )
}

export default Again
