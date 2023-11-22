import React, { useEffect, useState } from "react";
// import {MessagesContext} from './Context';

const List = () => {
  const [data, setData] = useState("");
  const getLocal=()=>{
    const getItem=JSON.parse(localStorage.getItem('setting'));
    if(getItem){
      return getItem;
    }
    else{
      return [];
    }
  }
  const [task, setTask] = useState(getLocal());
  const changeHandler = (e) => {
    setData(e.target.value);
  };
  const submitHandler = (e) => {
    const newTodos = [...task, data];
    setTask(newTodos);
    setData("");
    e.preventDefault();
  };
  const deleteHandler=(index)=>{
    const updatedValues=[...task]
    updatedValues.splice(index,1)
    setTask(updatedValues);
  }
  useEffect(()=>{
    localStorage.setItem('setting',JSON.stringify((task)))
  },[task])
  
  return (
    <div>
      <center>
        {/* <h1>context</h1>
        <MessagesContext.Consumer>
          {
            ((value)=><div>{value.username}</div>)
          }
        </MessagesContext.Consumer> */}
        <form onSubmit={submitHandler}>
          <h1>TODOS LIST</h1>
          <input
            type="text"
            style={{ height: "30px", width: "40%", margin: "10px" }}
            name="list"
            onChange={changeHandler}
            value={data}
          ></input>
          <button style={{ height: "35px", width: "5%" }} type="submit">
            ADD
          </button>
        </form>
        {
          task.map((tasks,index)=>{
            return(
              <div key={index}>
            <h1>{tasks} </h1>
            <button onClick={()=>deleteHandler(index)}>delete</button>
            </div>
            )
          })
        }
      </center>
    </div>
  );
};

export default List;
