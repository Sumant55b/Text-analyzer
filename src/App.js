import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  const [mode, setMode] = useState("light");

  //handle Dark mode
  const handleMode = () =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <Navbar mode={mode} setMode={handleMode}/>
      <Home mode={mode} />
    </div>
  );
}

export default App;
