import React from 'react'

const Promises = () => {
    function a(value,error){
        return new Promise((resolve,reject)=>{
            if(!error){
                resolve(value+10)
            }
            else{
                reject('ERROR')
            }
        })
    }
   async function b(){
        let result=await a(10,true)
        return result
   }
   b().then((result)=>console.log(result)).catch((error)=>console.log(error));
  return (
    <div>
      
    </div>
  )
}

export default Promises
