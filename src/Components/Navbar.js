import React from 'react';
import {Link} from "react-router-dom";
export default function Navbar(props){

  function handleClick(){
      if(props.greenMode === "Enable")
      {
        const a= props.togGreenMode;
      
      }
      const b = props.toggleMode;
  }
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.titles}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" >About</Link>
        </li>
        
        
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togGreenMode} />
        <label className="form-check-label"> {`${props.greenMode === 'Enable'?'Disable':'Enable'}`} green mode</label>
      </div>

      <div className={`form-check mx-3 form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" >Enable {`${props.mode === 'light'?'dark':'light'}`} mode</label>
    </div>
    </div>
  </div>
</nav>
    );
}

