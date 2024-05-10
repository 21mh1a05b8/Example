import { useState,useEffect } from "react";
import axios from "axios";
const Studdata = () =>{
    let [studentdata,setStudentdata]= useState([])
    useEffect(()=>{
       axios.get('http://localhost:5000/getstudent').then((response)=>{
        setStudentdata(response.data.studentdata)
       });
    },[]);
    const Deletestu =(id) =>{
        console.log(id);
    }
    return(
        <center>
        <div style={{backgroundColor:'pink',height:"200px",width:"500px"}}>
            <h1>Student Data</h1>
            <table align="center" border="1">
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Rollno</th>
                <th>College</th>
                <th>Branch</th>
                <th colSpan={2}>Action</th>
            </tr>
            {studentdata.map((ele,index,arr)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><button id="{ele._id}">Edit</button></td>
                        <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                    </tr>
                )
              }
            )}
            </table>
        </div>
        </center>
    )
}
export default Studdata;