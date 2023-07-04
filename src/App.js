import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { useState } from 'react';


function App() {
  const [mode,setmode] = useState('light');
  function handlemode(){
    if(mode == 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
      <Navbar mode = {mode} handlemode = {handlemode}/>
      <Textarea mode = {mode}/>
    </>
  );
}

export default App;
