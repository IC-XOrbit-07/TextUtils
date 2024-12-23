import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";  
// these above are not referring to component name  + updatded react-16 syntax also 

function App() {
  
  const [currentTheme , toggleTheme] = useState('light');
  const [alert , setAlert] = useState('null');

  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const colorToggler = ()=>{
    console.log("executed");
    if(currentTheme==='dark'){
      toggleTheme('light');
      document.body.style.backgroundColor = 'white';
      // console.log(document.body.style.backgroundColor);
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils : Light Mode";
    }
    else{
      toggleTheme('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils : Dark Mode";
    }
  }
  

  return (
    // The code written inside this return is actually called a jsx.
    // JS Fragmenter <> </>  to conver a code into single block

    <>
    
    
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" currentTheme={currentTheme} colorToggler={colorToggler}/>
      <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForms showAlert = {showAlert} heading="Enter the text to analyze" currentTheme={currentTheme} /> }> */}
            {/* </Route> */}
          {/* </Routes> */}
          <TextForms showAlert = {showAlert} heading="Enter the text to analyze" currentTheme={currentTheme} />
        </div>
    {/* </Router> */}

    
    </>
  );
}

export default App;
