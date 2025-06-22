import {useState} from "react";

function State()
{
    const [count , setCount] = useState(0);
    let handler = ()=>{
        setCount(count+1);
    }
    return(
        <div>
          <h1>Initial value: {count} </h1>
          <button onClick={handler}>Change value</button>
        </div>
    )
}

export default State;