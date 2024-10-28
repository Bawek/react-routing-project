import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <main className='pageNot'>
    <h1 style={{color:'red'}}>404 | PageNotFound</h1>
<button onClick={()=>navigate("/")}><h1>Back to home page</h1></button>
    </main>
  )
}

export default PageNotFound