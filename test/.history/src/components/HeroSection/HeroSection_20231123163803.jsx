import React from 'react'
import { Row,Col,Image,Slider} from 'antd';

import image from '../../images/design.png'

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
    <>
    <Row gutters={24} > 
      <Col  lg={{ span:24, order: 1 }} md={24} xs={24} xl={24} style={{background:'black', width:'20pc'}}>Heelooo</Col>
    </Row>

   <Row>
    <Col lg={{ span: 12, order: 2 }} md={8} xs={4} xl={12}>
  
    <div style={boldTextStyle} text >
        
         Have a Restaurant,don't have time? <br />
         We got your covered! <br/>

         <div style={normalTextStyle}  >See what we're offering and how it can help <br />

  
         </div>
    </div>
    </Col>
    <Col lg={{ span: 12, order: 3 }}md={8} xs={4} xl={12}>
    <Image width={'70%'} preview={false} height={'90%'} src={image} alt="#" />

    </Col>
   </Row>
   </>
  )
}

export default HeroSection