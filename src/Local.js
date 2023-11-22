import React, { useEffect, useState } from 'react'

const Local = () => {
    const loggingFunc=()=>{
        const logged=JSON.parse(localStorage.getItem('logging'))
        if(logged){
            return logged;
        }
        else{
            return [];
        }
    }
    const[data,setData]=useState({
        username:'',
        password:'',
    })
    const{username,password}=data;
    const[update,setUpdate]=useState(loggingFunc());
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(update);
        setUpdate({...update,data});
        // setData({});
    }
    useEffect(()=>{
        localStorage.setItem('logging',JSON.stringify(update));
    },[update])
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
            <label>Username</label>
      <input type='text' placeholder='enter your name' name='username' onChange={changeHandler} value={username}/>
      <br/><br/>
      <label>Password</label>
      <input type='password' placeholder='enter password' name='password' onChange={changeHandler} value={password}/>
      <br/><br/>
      <button type='submit'>login</button>
      </form>
      </center>
    </div>
  )
}

export default Local
