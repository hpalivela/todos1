// import React from 'react'
// const Child = (props) => {
//     console.log(props)
//   return (
//     <div>
//      <h1>{props.name},{props.age}</h1> 
//     </div>
//   )
// }

// export default Child
import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={()=>props.setName('chinni')}>click me</button>
    </div>
  )
}

export default Child
