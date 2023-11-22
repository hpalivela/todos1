
import Child from './Child'
//using props parent to child data transfer
// const Parent = () => {
//   return (
//     <div>
//       <h1 >Iam Parent</h1>
//       <Child name='bindu' age='24'/>
//     </div>
//   )
// }

// export default Parent
//using state parent to child data transfer

import React, { useState } from 'react'

const Parent = () => {
    const [first,setFirst]=useState('venky')
  return (
    <div>
      <Child name={first} setName={setFirst}/>
    </div>
  )
}

export default Parent


