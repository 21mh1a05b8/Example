import  express  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import student from './models/student';
import user from './models/user';
import email from './models/email'; 
import nodemailer from 'nodemailer';
const app=express();
app.use(bodyParser.json())
app.use(cors())
// app.use(express.json())
mongoose.connect('mongodb+srv://padalakalyanireddy:fsYNYeYb3xuE6Ctg@cluster0.8ygdxyz.mongodb.net/DriveReady?retryWrites=true&w=majority&appName=AtlasApp')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listening to localhost 5000")
)
.catch((err) => console.log(err))
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+" _"+ file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.post('/addstud',upload.single("myfile"), async (req ,res ,next)=>{
    console.log(req.body.formdata)
    const profile=(req.file) ? req.file.fieldname:null
    const {name,rollno,college,branch}=req.body.formdata
    const stud=new student({
        name,
        rollno,
        college,
        branch,
        profile,
    })
    stud.save()
    //for saving data into database
    return res.send({msg:"inserted",result:student})
})
app.post('/addlogin',(req ,res ,next)=>{
    console.log(req.body.formdata)
    const {userid,password,}=req.body.formdata
    const userlogin=new user({
        userid,
        password
    })
    userlogin.save()
    //for saving data into database
    return res.send({msg:"inserted",result:user})
})
app.delete('/deleteuser/:id', async (req, res, next)=>{
    const _id = req.params.id
    let users;
    try{
        users = await student.findByIdAndRemove(_id);
    }catch(err){
        return console.log(err)
    }
    if(!users){
        return res.status(400).json({message:"Unable to delete the user."})
    }
    return res.status(200).json({messgae:"Succeesfully deleted."})
})
app.post('/addstudent',(req,res,next)=>{
    // console.log(req.body)
    // //res.send("Success")
    // res.send({rollno:req.body.rollno})
//})
    const {name,rollno,college,branch} = req.body;
    const stud = new student({
        name,
        rollno,
        college,
        branch
    })
    stud.save()
    return res.status(201).json({stud})
})
app.get('/getstudent',async(req,res,next)=>{
    //res.send("Success");
    let studentdata
    try{
        studentdata = await student.find()
    }
    catch(err){
        console.log(err)
    }
    if(!studentdata){
        console.log("no student data found")
    }
    return res.status(200).json({studentdata}) 
})
app.post('/addemailform',(req ,res ,next)=>{
    console.log(req.body.formdata)
    const {username,emaill,password,}=req.body.formdata
    const emailform=new email({
        username,
        emaill,
        password
    })
    emailform.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'padalakalyanireddy@gmail.com',
          pass: 'keqq llfy lprg gwww'
        }
      });
      
      var mailOptions = {
        from: 'padalakalyanireddy@gmail.com',
        to: emaill,
        subject: 'Sending Email using Node.js'+password,
        text: 'your password is'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    //for saving data into database
    return res.send({msg:"inserted",result:email})
})
// app.use('/',(req,res,next)=>{
//     res.send("Hello FSD")
// })
// app.listen(4444)
//backend/api
//localhost:4444/api