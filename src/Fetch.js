import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[data,setData]=useState([]);
useEffect(()=>{
    fetch(("https://jsonplaceholder.typicode.com/users").then(response=>response.json()))
    .then(json=>console.log(json))
})
  return (
    <div>
      {
        data.m
      }
    </div>
  )
}

export default Fetch
