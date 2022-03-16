import React, { useState } from 'react'


function Counter() {
    const [counter,setCounter]=useState(1)
    const addme=()=>
    {
        setCounter(counter+1)
    }
  return (
    <div style={{background:'red'}}>
        <h1>{counter}</h1>

        <button onClick={addme}>Click me </button>
        </div>

  )
}

export default Counter