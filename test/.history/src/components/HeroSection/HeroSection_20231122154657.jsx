import React from 'react'

import { Row,Col } from 'antd';

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
    <Row>
    <Col span={12}>
  
    <div style={boldTextStyle} text >
        
         Have a Restaurant,don't have time? <br />
         We got your covered! <br/>

         <div style={normalTextStyle} >See what we're offering and how it can help <br />

  
         </div>
    </div>
    </Col>
    <Col span={12}>col-12</Col>
    
   </Row>

  )
}

export default HeroSection