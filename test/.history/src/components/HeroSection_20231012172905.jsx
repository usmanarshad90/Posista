import React from 'react'

const HeroSection = () => {
    const boldTextStyle = {
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif', // Change the font family to your preferred one
        paddingTop: '100px',
        paddingLeft: '20px',
      };
    
      const normalTextStyle = {
        fontWeight: 'normal',
        fontFamily: 'Arial, sans-serif', // Change the font family to your preferred one
      };



  return (
    
    <div style={{fontWeight: 'bold' ,paddingTop:'100px', paddingLeft:'20px'}}>
        
         Remote Restaurant Managment? <br /> 
         Control at your Fingertips? <br />
         We got your covered! <br/>

         <div style={{fontWeight: 'normal'}} >Unlock the potential of your smartphone or <br />
              tablet and simplify your business processes.

         </div>
    </div>
    
    
    

  )
}

export default HeroSection