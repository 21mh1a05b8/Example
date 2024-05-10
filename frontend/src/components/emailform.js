import { useState } from "react";
import axios from "axios";
const Emailform = () =>{
    const [formdata, setFormdata] = useState({
        'username':'',
        'emaill':'',
        'password':'',
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formdata.username==='' || formdata.emaill==='' || formdata.password==='' ){
            alert("Please fill all the fields");
        }
        else{
            console.log(formdata)
            axios.post('http://localhost:5000/addemailform',{formdata})
            .then((result) =>{
                alert("Sucess");
                setFormdata({
                    username: '',
                    emaill: '',
                    password: '',
                });
            })
        }
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={(e) =>setFormdata({...formdata,username:e.target.value})}/>
                <br></br><br></br>
                <label>Email</label>
                <input type="email" name="emaill" onChange={(e) =>setFormdata({...formdata,emaill:e.target.value})}/>
                <br></br><br></br>
                <label>Password</label>
                <input type="text" name="password" onChange={(e) =>setFormdata({...formdata,password:e.target.value})}/>
                <br></br><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Emailform;

