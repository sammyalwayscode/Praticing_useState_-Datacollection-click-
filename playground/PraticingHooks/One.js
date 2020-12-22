import React, { useState } from 'react'

function One({ show, setShow }) {
  const [tap, setTap] = useState({})
  const handleChange = (e) => {
    setTap({ ...tap, [e.target.name]: e.target.value })
  }

  const trow = () => {
    console.log(tap);
  }
  return (
    <div>
      {
        show ? <input placeholder="Enter Your Name" type="text" name="name" onChange={handleChange} /> : null}
      {
        show ? < input placeholder="Enter Your Email" type="email" name="email" onChange={handleChange} /> : null
      }
      {
        show ? <input placeholder="Upload an Avatar" type="file" name="image" onChange={handleChange} /> : null}
      {
        show ? <button onClick={trow} >Summit</button> : <h1>What happned</h1>
      }
    </div>
  )
}

export default One
