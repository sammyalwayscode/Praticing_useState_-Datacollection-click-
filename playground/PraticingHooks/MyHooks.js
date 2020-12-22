import React, { useState } from 'react'

function MyHooks() {

  const [click, setClick] = useState({})

  const handleChange = (e) => {
    setClick({ ...click, [e.target.name]: e.target.value })
  }

  const send = () => {
    console.log(click)
  }


  return (
    <div>


      <input
        placeholder="Upload Your Image"
        type="file"
        onChange={handleChange}
        name="Image"
      />

      <input
        placeholder="Enter Your First Name"
        type="text"
        onChange={handleChange}
        name="name"
      />

      <input
        placeholder="Enter Your Middle Name"
        type="text"
        onChange={handleChange}
        name="middle"
      />

      <input
        placeholder="Enter Your Email"
        type="text"
        onChange={handleChange}
        name="email"
      />

      <input
        placeholder="Your Age"
        type="number"
        onChange={handleChange}
        name="age"
      />



      <button onClick={send} >Click Me</button>

    </div>
  )
}

export default MyHooks
