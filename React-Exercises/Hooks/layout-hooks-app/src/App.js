import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Kubilay");
  
  useEffect(function () {
    //second
    console.log("useEffect");
  });

  useLayoutEffect(function () {
    //first
    console.log("uselayouteffect")
  })

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
