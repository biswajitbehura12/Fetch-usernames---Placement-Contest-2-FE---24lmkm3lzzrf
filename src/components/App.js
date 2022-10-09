import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
const [id,setId]=useState("")
    
  const [name,setName]=useState(null);
  useEffect(() => {
    let URI=`https://content.newtonschool.co/v1/pr/main/users/${id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        const json = await response.json();
        console.log(json);
        setName(json.name);
      } catch (error) {
        console.log("error", error);
      }
     
    };
    
    fetchData();
    
    
}, []);

const changeInput=(e)=>{
        setId(e.target.value);
}



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" value={id} onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
