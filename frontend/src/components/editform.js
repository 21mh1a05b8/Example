import { useState } from "react";
import axios from "axios";
const Editform = () =>{
    const [formdata, setFormdata] = useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':'',
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addstud',{formdata})
        .then((result) => alert("Sucess"))
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) =>setFormdata({...formdata,name:e.target.value})}/>
                <br></br><br></br>
                <label>Roll Number</label>
                <input type="text" name="rollno" onChange={(e) =>setFormdata({...formdata,rollno:e.target.value})}/>
                <br></br><br></br>
                <label>College</label>
                <input type="text" name="college" onChange={(e) =>setFormdata({...formdata,college:e.target.value})}/>
                <br></br><br></br>
                <label>Branch</label>
                <input type="text" name="branch" onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}/>
                <br></br><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Editform;