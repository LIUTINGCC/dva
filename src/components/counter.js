import React from 'react'
const Counter =  ({increase, decrease, counter})=>{
    return(
        <div>
        <h2>{counter}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>
    )
}
export default Counter
