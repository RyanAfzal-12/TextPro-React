import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#5C6B73";
      showAlert('success', 'Dark mode has been enabled');
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('success', 'Light mode has been enabled');
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Pro" Home="Home" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform heading="Enter the text to be Analyzed" mode={mode} showAlert={showAlert} />

          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<Textform heading="Enter the text to be Analyzed" mode={mode} showAlert={showAlert} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;