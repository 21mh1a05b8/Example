import { useState } from "react";
import axios from "axios";
const Login = () =>{
    const [formdata, setFormdata] = useState({
        'userid':'',
        'password':''
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addlogin',{formdata})
        .then((result) => alert("Sucess"))
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>UserId</label>
                <input type="text" name="userid" onChange={(e) =>setFormdata({...formdata,userid:e.target.value})}/>
                <br></br><br></br>
                <label>Password</label>
                <input type="text" name="password" onChange={(e) =>setFormdata({...formdata,password:e.target.value})}/>
                <br></br><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Login;