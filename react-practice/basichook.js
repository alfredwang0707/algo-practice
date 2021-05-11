import React, {useState} from 'react'

function example(){
    const [count,setCount] = useState(0)

    return (
        <>
            <p>youve been clicked {count} times</p>
            <button onClick = {()=> setCount(count + 1 )}>
              click me  
            </button>
        </>
    )
}
