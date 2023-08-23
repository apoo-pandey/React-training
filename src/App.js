import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import AppMain from './AppMain.js';
import GainFooter from './GainFooter';
import GainMenu from './GainMenu.js';
//import Counter from './Counter.js';
import Counter from './Classbasedcounter';
import { useState } from 'react';
import Assignment1  from './Assignment1';
function App() {
  const [hide, setHide]=useState(false);
  const toggle=()=>{
    setHide(!hide);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment 1</h1>
        <button onClick={toggle}>Show/Hide</button>
        {hide ? "" : <Assignment1 />}
        {/*<Login title="welcomeeee" hobby="Cooking"></Login>}
        {/* <AppMain></AppMain> */}
        {/* <GainMenu></GainMenu> */}

        {/*<Login></Login>*/}
      </header>
      <footer>
      </footer>
    </div>
  );
}

export default App;
