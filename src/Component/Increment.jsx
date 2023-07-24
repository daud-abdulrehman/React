import React from 'react'
import {useState} from "react"

function Increment() {
    const [number,setNumber]=useState(0)
    return (
      <div className="App">
        {number}
        <br/>
        <button onClick={() => setNumber(number + 1)}>Incerment</button>
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </div>
    );
  }

  export default Increment;