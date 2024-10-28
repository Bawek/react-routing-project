  import React from 'react'
  import { replace, useNavigate } from 'react-router-dom'

  const Contact = () => {
    const navigate=useNavigate()
    return (
      <main>
      <div className='contact'>
      <h1>    Contact</h1>

  <div id='button'>
  <button onClick={() => navigate("./info", { replace: true })}>
  <h1>Contact Info</h1>
  </button>

  <button onClick={() => navigate("./form", { replace: true })}>
 <h1> Please Contact Me</h1>
  </button></div>

      </div>
      </main>
    )
  }

  export default Contact