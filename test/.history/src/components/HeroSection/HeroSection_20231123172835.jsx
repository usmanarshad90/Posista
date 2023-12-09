import React from 'react'
import { Row,Col,Image,Divider} from 'antd';

import image from '../../images/design.png'

const HeroSection = () => {
    



      const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;
  return (
    <>
    <Row  > 
      <Col  lg={{ span:24, order: 1 }} md={24} xs={24} xl={24} xxl={24}  style={{background:'wheat'}}>
      <DemoBox value={'100%'}> </DemoBox>
        </Col>

    <Col lg={{ span: 6, order: 2 }} md={8} xs={8} xl={12}>
  
    <div   >
        
         Have a Restaurant,don't have time? <br />
         We got your covered! <br/>

         <div   >See what we're offering and how it can help <br />

  
         </div>
    </div>
    </Col>
    <Col lg={{ span: 6, order: 3 }}md={8} xs={4} xl={12}>
    <Image width={'70%'} preview={false} height={'90%'} src={image} alt="#" />

    </Col>
   </Row>
   </>
  )
}

export default HeroSection