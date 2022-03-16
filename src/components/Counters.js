import React, { useState } from 'react'

function Counters() {
    const [count,setCount]=useState(1)
function addme()
{
     setCount(count+1)
}
  return (
    <div>Counters
        <h3>{count}</h3>
    <button onClick={addme}>Add me</button>
    </div>
  )
}

export default Counters