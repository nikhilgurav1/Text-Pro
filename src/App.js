/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './TextEdit.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextEdit from './componants/TextEdit';
import Login from './componants/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');

const toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#052b4c';

   } 
  else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
  <BrowserRouter>
           <Navbar title="Text Edit" mode={mode} toggleMode={toggleMode} home="Edit Text" AboutUs="About" register="Register" login="Login"/>
            
    <Routes>
         
       <Route exact path='/about' element={<About/>} />
          
       < Route exact path='/home' element={<TextEdit className="text" mode={mode} sytle="border: 3px solid " heading="Here You Can Edit Your Text"/>}/>
          
       <Route exact path='/login' element={<Login/>}/>   
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
