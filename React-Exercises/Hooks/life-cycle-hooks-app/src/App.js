import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("initial");
  const [number,setNumber] = useState(0);
  
  
  useEffect(function(){
    console.log("Hiii!!")
  },[message])
  return (
    <div>
    
      {message} <button onClick={() =>setMessage("Hello World")}  >Change Message</button>
      
      {number}<button onClick={()=>setNumber(4)} >Change Number</button>
    
    
    </div>
    
  );
}

export default App;
