import React, { useState } from 'react'

const Test = () => {
  // const numbers=[1,2,3,4,5]
  // const output=numbers.reduce((accumulator,currentValue)=>{
  //   return accumulator+currentValue
  // },100)
  const[value,setValue]=useState(0);
  const addHandler=()=>{
      const add=value+1;
      setValue(add);
  }
  const minusHandler=()=>{
    const minus=value-1;
    setValue(minus);
}
  return (
    <div>
      {/* {output} */}
      <center>
      <button onClick={addHandler}>+</button>
      {value}
      <button onClick={minusHandler}>-</button>
      </center>
    </div>
  )
}

export default Test
