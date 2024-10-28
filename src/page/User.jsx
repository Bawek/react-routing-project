import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loader=useLoaderData();
  return (
    <div className='user'>
    {loader.map((l) => (
      <Link to={l.id.toString()} key={l.id}>{l.name} {l.Phone} </Link>
    ))}
  </div>
  
  )
}

export default User;
export const UserLoader=async()=>{
    const res=await fetch("http://localhost:3500/student");
return res;
}