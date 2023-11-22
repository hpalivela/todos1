import React, { useEffect, useState } from "react";
import "./Api.css";
const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((users) => setData(users));
  }, []);
  return (
    <div>
        <center>
        
      {data.map((user) => {
        return (
            
          <div className="container">
            <div>
              <h5>{user.title}</h5>
              <p>{user.body}</p>
            </div>
          </div>
          
        );
      })}
      </center>
    </div>
  );
};

export default Api;
/* {data.map((user)=>{return(
            <div>
            <h5 key={user.id}>{user.title}</h5>
            <p key={user.id}>{user.body}</p>
            </div>
        )}
        )} */
