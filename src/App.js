// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Alert from "./component/Alert";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // state defining dark mode and light mode
  const [btnText, setBtnText] = useState("darkMode");
  const [alert, setAlert] = useState(null);

  const alertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    // const body = document.getElementsByTagName('body');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051935";
      alertMsg("Dark mode enabled!!!", "success");
      setBtnText("lightMode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertMsg("Light mode enabled!!!", "success");
      setBtnText("darkMode");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="AboutUs"
        mode={mode}
        btnText={btnText}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                heading="Enter text to analyze "
                mode={mode}
                alertMsg={alertMsg}
              />
            }
          />

          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      {/* <About/> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;
