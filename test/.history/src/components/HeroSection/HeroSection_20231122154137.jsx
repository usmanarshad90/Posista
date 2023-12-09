import React from 'react'
impo

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
        
         Have a Restaurant,don't have time? <br />
         We got your covered! <br/>

         <div style={normalTextStyle} >See what we're offering and how it can help <br />
              

         </div>
    </div>
    
    
    

  )
}

export default HeroSection