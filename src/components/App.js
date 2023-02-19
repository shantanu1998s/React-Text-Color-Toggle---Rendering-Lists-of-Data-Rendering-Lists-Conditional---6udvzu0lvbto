import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [isActive, setIsActive]=useState(false);
//code here 
  function applyCss(){
    setIsActive(current => !current);
  }
  return (
    <div id="main">
      <p className={isActive? 'blueColor' : 'redColor'} >Newton School</p>
      <button id='button' onClick={applyCss}>Change Style</button>
    </div>
  )
}


export default App;
