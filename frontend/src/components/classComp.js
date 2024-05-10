import React from "react";

class ClassComp extends React.Component{
    
    render(){
        let name="Kalyani"
        let branch="CSE"//variable decalrations anni return statement paina cheyali
        return (
            <div>
                <h1>This is a Class Component for {name} {branch} </h1>
            </div>
        )
    }
}
export default ClassComp;