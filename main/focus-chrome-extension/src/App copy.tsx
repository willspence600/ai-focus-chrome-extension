import './App.css'
import { useState } from 'react';
// import React from 'react'

function App() {
  const [pageContent, setPageContent] = useState(0);
  const handleClick = () => {
    console.log(pageContent);
    setPageContent(pageContent + 1);
  }
  

  return (
    <>
      <div>
        <button onClick={handleClick}>Hi</button>
        <div>{pageContent}</div>
      </div>    
      </>
  )
}

export default App;