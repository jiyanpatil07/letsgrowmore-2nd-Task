// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import FetchApi from "./LGM-Task-2/FetchApi";
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode=()=> {
    console.log("clicked")
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="#042743"

    }
  }
  return (
    <>
       <Navbar title="jiyan patil" mode={mode} toggleMode={toggleMode} />
      {/* <Textform></Textform>  */}
      <div className="container my-3">
        
      <Textform heading="Enter the text to analize" mode={mode}/>
      {/* <About></About> */}

      </div>




      {/* <div>
        <FetchApi></FetchApi>
      </div> */}
 
    </>
  );
}

export default App;
