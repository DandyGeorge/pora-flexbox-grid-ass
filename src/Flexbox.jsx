import React from 'react'
import "./Flexbox.css"

const Flexbox = () => {
  return (  
    <div>    
     <div className='flex-container'>
      <h1 className='home'>Home</h1>    
      <h1 className='contact'>Contact</h1>
      <h1 className='services'>Services</h1>
      <h1 className='news'>News</h1>      
     
     </div>
     <div className='container'>
     <p> You can become a professional Software Front-End Developer by keeping yourself up to dated with the frontend ecosystem in the grid below:</p>       
     <div className='grid_container'>
      <h1 className='grid1'>Html</h1>
      <h1 className='grid2'>CSS</h1>
      <h1 className='grid3'>JavaScript</h1>
      <h1 className='grid4'>React</h1>
      <h1 className='grid5'>Vue.js</h1>
      <h1 className='grid6'>Angular.js</h1>
      <h1 className='grid7'>React Native</h1>
      <h1 className='grid8'>REST APIs</h1>
      <h1 className='grid9'>TypeScript</h1>
      <h1 className='grid10'>Bootstrap</h1>
      <h1 className='grid11'>Tailwind Css</h1>
      <h1 className='grid12'>Material UI</h1>
      <h1 className='grid13'>npm & yarn</h1>
      <h1 className='grid14'>React Testing Lib.</h1>
      <h1 className='grid15'>Git & GitHub</h1>
      <h1 className='grid16'> Others/Research</h1>
      
     </div>  
     
     </div>
    </div> 
         
    
  );
}

export default Flexbox
