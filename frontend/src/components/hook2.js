import { useState } from "react"
function Hooks2(){
    // const cnt=0;
    const [light,wiring]=useState(false)
    return (
        <div>
            <button onClick={() => wiring(true)}>ON BUTTON</button>
            <button onClick={() => wiring(false)}>OFF BUTTON</button>
            <br></br><br></br>
            {
            light === false?<img src="off.jpeg" /> : <img src="on.jpeg" />
            }
        </div>
    )
}
 export default Hooks2;