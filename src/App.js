import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import AppMain from './AppMain.js';
import GainFooter from './GainFooter';
import GainMenu from './GainMenu.js';
//import Counter from './Counter.js';
import Counter from './Classbasedcounter';
import { useState } from 'react';
import Navbar from './Navbar';
import Assignment1  from './Assignment1';
import Student from './Student';
import Todo from './Todo';
import Home from './Home';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import Ecommerce from './Ecommerce';
function App() {
  {/*const [hide, setHide]=useState(false);
  const toggle=()=>{
    setHide(!hide);
  };*/}
  let students=["Kamran","Sana","Apoo","Shreyanshi"];
  return (
    <div className="App">
        {/*<Navbar></Navbar>*/}
        {/*} <AppMain></AppMain>*/}
      <header className="App-header">
        {/*<a href="/todo" >Todo</a>
        <a href="/student">Students</a>*/}
        <BrowserRouter>
        <Link className="link-home" to="/">Home</Link>
        <Link className="link-home" to="/ecommerce">Ecommerce</Link>
        {/*<Link to="/todo">Todo</Link><br/>
        <Link to="/student">Student</Link>
      <Link to="/Login">Login</Link>*/}
         <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/todo" element={<Todo />} />*/}
          <Route path="/ecommerce" element={<Ecommerce />} />
          {/*<Route path="/student" element={<Student />} />
          <Route path="/login" element={<Login />} />*/}
         </Routes>
        </BrowserRouter>
        {/*<div className="App">
        <Student/>
        </div>*/}
       {/*<Todo/>}
       {/*<button onClick={toggle}>Show/Hide</button>*/}
       {/*} {hide ? "" : <Assignment1 />}}
        {/*<Login title="welcomeeee" hobby="Cooking"></Login>}
        {/* <AppMain></AppMain> */}
        {/* <GainMenu></GainMenu> */}
        {/*<Login></Login>*/}
      </header>
      <footer>
        {/*<GainFooter></GainFooter>*/}
      </footer>
    </div>
  );
}

export default App;
