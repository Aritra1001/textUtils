// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';

function App() {

  const [mode, setMode] = useState('light');   // state defining dark mode and light mode

  const toggleMode = ()=>{
    // const body = document.getElementsByTagName('body');
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#051935';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  }

  return (
   <>
    <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading= "Enter text to analyze " mode={mode} />
    {/* <About/> */}
    {/* <Navbar/> */}
   </>
  );
}

export default App;
