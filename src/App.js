import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

const [mode,setMode]=useState("light");
const [alert1,setAlert] = useState(null);
const [modeGreen,setGreenMode] = useState("Disable");



const showAlert = (message,type)=>{

      setAlert({
        msg:message,
        type:type
      });

      setTimeout(() => {
        setAlert(null);
      }, 1500);


}

const toggleGreenMode = ()=>{
      if(modeGreen === 'Enable')
      {
          setGreenMode("Disable");
          document.body.style.color = "black";
          document.body.style.backgroundColor = "white";
      }
      else
      {
        //alert("green clicked");
        setGreenMode("Enable");
        document.body.style.color = "white";
        document.body.style.backgroundColor = "green";
        if(mode === 'dark')
        {
          setMode("light");
          document.body.style.color = "black";
          document.body.style.backgroundColor = "white";
        }
      }

}
const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled","success");
      setGreenMode("Disable");
    }
    else 
    { 
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      if(modeGreen === 'Enable')
      {
          setGreenMode("Disable");
          document.body.style.color = "black";
          document.body.style.backgroundColor = "white";
      }
    }
}
  return (
    <Router>
        <div>
          <Navbar titles="Tanvi" mode = {mode} toggleMode = {toggleMode} greenMode={modeGreen} togGreenMode = {toggleGreenMode}/>
          <Alert alert = {alert1}/>
          <div className="container my-3" >
            {/* For Tesxtform which converts data into upper,lower and reverse. Remove comments for chekcing this our.t. */}

              <Routes>
                <Route path="/about" element = {<About />}>
                  
                </Route>
                <Route path="/" element = {<TextForm showAlert={showAlert} greenMode={modeGreen} heading="Enter your text" mode = {mode} />}>
                  
                </Route>
                
            </Routes>

            
            
          
          {/*
            <About/>
          */} 
          </div>
        
        </div>
  </Router>
  );
}

export default App;
