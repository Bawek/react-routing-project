import React from 'react'
import img from "../asset/1724735759916.jpg"
import {Link  } from "react-router-dom";
const Nav = () => {
  return (
<nav>
<img src={img} alt='imag' />
<ul>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/history">History</Link>

 
</ul>
</nav>  )
}

export default Nav