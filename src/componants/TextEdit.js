import React, { useState } from 'react';

export default function TextEdit(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
// to set text as UpperCase 
  const handleOnClick = () => {
    setText(text.toUpperCase());
  };
// to set text as a LowerCase
  const handleOnClickup = () => {
    setText(text.toLowerCase());
  };
// to set text as a CamaleCase
  const CamelCase = () => {
    const words = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(words);
    
  };
// this function clear text from text area
  const Cleartext = () =>{
    document.getElementById("exampleFormControlTextarea1").value="";
    return null;
    
  };
// this function copy text from text area
  const CopyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Copied to clipboard'))
      .catch(err => console.error('Failed to copy:', err));
  };
   // this function is on going woek not complitete
//  const  removeExtraSpaces = ()=> {
    
  //  document.getElementById = 'exampleFormControlTextarea1';
  //   let cleanText = this.replace(/\s+/g, " ");
  
    
  //   cleanText = cleanText.trim();
  
  //   return cleanText;
  // }
  

  
  return (
    <>
      <div className="container my-4" style={{color: props.mode === 'light' ? 'black': 'white'}}>
        {props.heading}
        <textarea 
          className="form-control my-3" 
          value={text} 
          id="exampleFormControlTextarea1" 
          rows="8"
          onChange={handleChange}
         style={{backgroundColor: props.mode === 'dark' ? '#072b50': 'white', color: props.mode === 'light' ? 'black': 'white'}}>
          
         </textarea>
        <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={handleOnClick}>Change To Uppercase</button>
        <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={handleOnClickup}>Change To Lowercase</button>
        <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={CamelCase}>Camel Case</button>
        <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={Cleartext}>Clear Text</button>
        <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={CopyText}>Copy Text</button>    
        {/* <button className="btn btn-outline-primary m-2" style={{color: props.mode === 'light' ? 'black': 'white'}} onClick={removeExtraSpaces}>Rremove Extra Specs</button> */}
      </div>
    
      <div className="container my-2" style={{color: props.mode === 'light' ? 'black': 'white'}}>
        <h3 className='my-2' style={{color: props.mode === 'light' ? 'black': 'white'}}>Below your text summary</h3>
        <p className='my-2' style={{color: props.mode === 'light' ? 'black': 'white'}}>Word {text.split(" ").length} And {text.length} Character</p>
        <p className='my-2' style={{color: props.mode === 'light' ? 'black': 'white'}}>{0.008 * Math.ceil(text.split(" ").length)} Minute Read</p>
        <h3 className='my-2' style={{color: props.mode === 'light' ? 'black': 'white'}}>Preview</h3>
        <p className='container' style={{color: props.mode === 'light' ? 'black': 'white'}}>{text.length > 0 ? text:'Please Add Your Text In Text Area To See Preview'}</p>
      </div>
    </>
  );
}
