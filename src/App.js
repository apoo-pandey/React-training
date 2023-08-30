import logo from "./logo.svg";
import "./App.css";
import Login from "./Login.js";
import AppMain from "./AppMain.js";
import GainFooter from "./GainFooter";
import GainMenu from "./GainMenu.js";
//import Counter from './Counter.js';
import Counter from "./Classbasedcounter";
import { useState } from "react";
import Navbar from "./Navbar";
import Assignment1 from "./Assignment1";
import Student from "./Student";
import Todo from "./Todofinal/Todo";
import Home from "./Home";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecommerce from "./Ecommerce";
import Refhook from "./Refhook";
import EcommerceStruct from "./EcommerceStruct";
import ReduxCounter from "./Redux/ReduxCounter";
import EmployeeApp from "./Assignment-3/EmployeeApp";
import ReduxTodo from "./Redux/ReduxTodo";
import ReduxEmployee from "./Redux/ReduxEmployee";
import Blog from "./CompanyContext/Blog";
import CounterHook from "./Hooks/CounterHook";
import LazyHome from "./lazyndsuspense/LazyHome";
import Forgetpass from "./Forgetpass";
import ReduxCity from "./Assignment-4/ReduxCity";
import News from "./Assignment-4/News";
import Description from "./Assignment-4/Description";

function App() {
  {
    /*const [hide, setHide]=useState(false);
  const toggle=()=>{
    setHide(!hide);
  };*/
  }
  let students = ["Kamran", "Sana", "Apoo", "Shreyanshi"];
  return (
    <div className="App">
      {/*<Navbar></Navbar>*/}
      {/*} <AppMain></AppMain>*/}
      <header className="App-header">
        {/*<ReduxCounter />*/}
        {/*<a href="/todo" >Todo</a>
        <a href="/student">Students</a>*/}
        {/*<Todo />*/}
        {/*<Refhook />*/}
        {/*<EcommerceStruct />*/}
        {/*<EmployeeApp />*/}
        {/*<ReduxTodo />*/}
        {/*<ReduxEmployee />*/}
        {/*<CounterHook />*/}
        {/*<Blog />*/}
        {/*<Todo />*/}
        {/*<ReduxCity />*/}
        <BrowserRouter>
          <Link className="link-home" to="/">
            <u>Home</u>
          </Link>
          <Link className="link-home" to="/ecommerce">
            <u>Ecommerce</u>
          </Link>
          <Link className="link-home" to="/Assignment-3/EmployeeApp">
            <u>Employee-Profile</u>
          </Link>
          <Link className="link-home" to="./Redux/ReduxEmployee">
            <u>Employee-Profile(Redux)</u>
          </Link>
          <Link className="link-home" to="/Login">
            <u>Login</u>
          </Link>
          <Link className="link-home" to="/Assignment-4/ReduxCity">
            <u>Redux-City</u>
          </Link>
          {/*<Link className="link-home" to="/lazyndsuspense/LazyHome">
            Lazy-Home
      </Link>*/}
          {/*<Link to="/todo">Todo</Link><br/>
        <Link to="/student">Student</Link>*/}

          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/todo" element={<Todo />} />*/}
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/Assignment-3/EmployeeApp" element={<EmployeeApp />} />
            <Route path="/Redux/ReduxEmployee" element={<ReduxEmployee />} />
            {/*<Route path="/lazyndsuspense/LazyHome" element={<LazyHome />} />*/}
            {/*<Route path="/student" element={<Student />} />*/}
            <Route path="/Assignment-4/ReduxCity" element={<ReduxCity />}>
              <Route path=":loc" element={<News />}>
                <Route path="Description" element={<Description />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />}>
              <Route path="Forgetpass" element={<Forgetpass />} />
            </Route>
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
      <footer>{/*<GainFooter></GainFooter>*/}</footer>
    </div>
  );
}

export default App;
