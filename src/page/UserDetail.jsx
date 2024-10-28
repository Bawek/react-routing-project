import React from 'react'
import { useLoaderData } from 'react-router-dom'
const UserDetail = () => {
    const loade=useLoaderData()
  return (
    <div className='userDetail'> <h1>UserDetail</h1>
    <h2>ID : {loade.id}</h2>

    <h2>Name : {loade.name}</h2>
    <h2> Phone No :  {loade.Phone}</h2>
    <p><b>Discription : </b> Using useParams in the loader: useParams is a React hook, so it can only be used inside React components. In the loader, the route parameters are passed as an argument (e.g., params), not through useParams.
    Accessing res in the component: res is defined in the loader function but not available in the UserDetail component.
    Returning JSON Data in Loader: The loader should return parsed JSON data instead of the raw response. </p>


    </div>
  )
}

export default UserDetail
export const UserLoaderDetail=async({params})=>{
const {id}=params;
    const res=await fetch("http://localhost:3500/student/"+id);
return res;
}