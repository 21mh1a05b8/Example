// import { useState } from "react";
// import axios from "axios";
// const Form = () =>{
//     const [formdata, setFormdata] = useState({
//         'name':'',
//         'rollno':'',
//         'college':'',
//         'branch':'',
//         'profilePic':'',
//     })
//     const backend_api='http://localhost:5000/addstud'
//     const handleSubmit = (e) =>{
//         const Inputfields = new formdata()
//         Inputfields.append('myfile',formdata.profilePic,formdata.profilePic.name)
//         Inputfields.append('name'.formdata.name)
//         Inputfields.append('rollno'.formdata.rollno)
//         Inputfields.append('college'.formdata.college)
//         Inputfields.append('branch'.formdata.branch)
//         e.preventDefault();
//         e.preventDefault();
//         console.log(formdata)
//         axios.post(backend_api,Inputfields).then((result) => alert("Sucess"))
//     }
//     return(
//         <div>
//             <h1>Form</h1>
//             <form onSubmit={handleSubmit} action="post">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={(e) =>setFormdata({...formdata,name:e.target.value})}/>
//                 <br></br><br></br>
//                 <label>Roll Number</label>
//                 <input type="text" name="rollno" onChange={(e) =>setFormdata({...formdata,rollno:e.target.value})}/>
//                 <br></br><br></br>
//                 <label>College</label>
//                 <input type="text" name="college" onChange={(e) =>setFormdata({...formdata,college:e.target.value})}/>
//                 <br></br><br></br>
//                 <label>Branch</label>
//                 <input type="text" name="branch" onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}/>
//                 <br></br><br></br>
//                 <label>Upload</label>
//                 <input type="file" name="myfile" onChange={(e) =>setFormdata({...formdata,profilePic:e.target.files[0]})}/>
//                 <br></br><br></br>
//                 <input type="submit" value="submit" />
//             </form>
//         </div>
//     )
// }
// export default Form;
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    rollno: "",
    college: "",
    branch: "",
    profilePic: null, // Use null for the initial value of the file input
  });

  const backend_api = "http://localhost:5000/addstud";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("myfile", formdata.profilePic);
    formData.append("name", formdata.name);
    formData.append("rollno", formdata.rollno);
    formData.append("college", formdata.college);
    formData.append("branch", formdata.branch);

    axios
      .post(backend_api, formData)
      .then((result) => {
        alert("Success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
        />
        <br />
        <br />
        <label>Roll Number</label>
        <input
          type="text"
          name="rollno"
          value={formdata.rollno}
          onChange={(e) =>
            setFormdata({ ...formdata, rollno: e.target.value })
          }
        />
        <br />
        <br />
        <label>College</label>
        <input
          type="text"
          name="college"
          value={formdata.college}
          onChange={(e) =>
            setFormdata({ ...formdata, college: e.target.value })
          }
        />
        <br />
        <br />
        <label>Branch</label>
        <input
          type="text"
          name="branch"
          value={formdata.branch}
          onChange={(e) =>
            setFormdata({ ...formdata, branch: e.target.value })
          }
        />
        <br />
        <br />
        <label>Upload</label>
        <input
          type="file"
          name="myfile"
          onChange={(e) =>
            setFormdata({ ...formdata, profilePic: e.target.files[0] })
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
