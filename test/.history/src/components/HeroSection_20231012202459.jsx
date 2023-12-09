import React from 'react'

const HeroSection = () => {
    const boldTextStyle = {
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif', // Change the font family to your preferred one
        paddingTop: '100px',
        paddingLeft: '70px',
        paddingbottom:'10px',
      };
    
      const normalTextStyle = {
        fontWeight: 'normal',
        fontFamily: 'Arial, sans-serif', // Change the font family to your preferred one
        paddingTop:'10px',
      };



  return (
    
    <div style={boldTextStyle}>
        
         Have a Restaurant,Dont Ha? <br />
         We got your covered! <br/>

         <div style={normalTextStyle} >Unlock the potential of your smartphone or <br />
              tablet and simplify your business processes.

         </div>
    </div>
    
    
    

  )
}

export default HeroSection