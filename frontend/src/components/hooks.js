import { useState } from "react"
function Hooks(){
    // const cnt=0;
    const [cnt,setcnt]=useState(0)
    const incrBy =() =>{
        console.log(cnt);
         setcnt(cnt+1)
    }
    return (
        <div>
            <h1>React Hooks</h1>
            <p>{cnt}</p>
            <button onClick={(incrBy)}>Incr By 1</button>
        </div>
    )
}
 export default Hooks;