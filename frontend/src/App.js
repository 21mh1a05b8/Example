import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import CompA from './components/compA';
import CompB from './components/compB';
import CompC from './components/compC';
import ClassComp from './components/classComp';
import Image from './components/image'
import Person from './components/Person';
import StudentList from './components/StudentList';
import StudentListTable from './components/Table';
import Click from './components/Cliclk';
import Hooks from './components/hooks'
import Hooks2 from './components/hook2';
import Calculator from './components/Calculator';
import Form from './components/form';
import Login from './components/loginform';
import Studdata from './components/studentdata';
import Editform from './components/editform';
import Emailform from './components/emailform';
function App() {
  return (
    <div className='App'>
      {/* <h1>My Frontend</h1>
      <CompA />
      <CompB />
      <CompC />
      <ClassComp />
      <Image /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompA/>}/>
          <Route path='/compB' element={<CompB/>}/>
          <Route path='/compC' element={<CompC/>}/>
          <Route path='/Classcomp' element={<ClassComp/>}/>
          <Route path='/image' element={<Image/>}/>
          <Route path='/person' element={<Person name="santhu" id="12324" clg="ACOE"/>}/>
          {/* <Route path='/StudentListUnordered' element={<UnorderedList/>}/> */}
          <Route path='/Table' element={< StudentListTable/>}/>
          <Route path='/Cliclk' element={< Click/>}/>
          <Route path='/hooks' element={< Hooks/>}/>
          <Route path='/hook2' element={< Hooks2/>}/>
          <Route path='/Calculator' element={< Calculator/>}/>
          <Route path='/Form' element={< Form/>}/>
          <Route path='/Login' element={< Login/>}/>
          <Route path='/StudentData' element={< Studdata/>}/>
          <Route path='/editform/:id' element={<Editform/>}/>
          <Route path='/Emailform/' element={<Emailform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
