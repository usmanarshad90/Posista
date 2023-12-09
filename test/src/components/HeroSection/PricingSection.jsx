import React from 'react'
import { Link } from 'react-router-dom';
import {Row,Col, Typography, Card,Button } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons';


const PricingSection = () => {
  return (< >

    <Typography.Title level={1} style={{ textAlign:"center"}} >Pricing</Typography.Title>
    <div style={{ textAlign:"center",fontFamily:"Roboto" ,fontSize:"32px" , padding:"0px 0px 30px 0px"}}> With our <strong style={{ color: 'orange' }}> market competitive pricing plans</strong>,you<br></br>
    won't be looking elsewhere to get the best bang for <br></br>
    your back.Choose wisely!</div>

    <Row align="middle" style={{ background: '#f2f2f2f1'}} >
      
      
      <>
      <Col   lg={{ span:12 , order:1, offset:1}} md={{span:12, offset:1 }} sm={{span:23, offset:1 }} xs={{span:23, offset:1 }} xl={{span:12, offset:1 } }  style={{backgound:"cream"}} >
       
        <ul style={{ fontFamily:"Roboto" ,fontSize:"20px" }} > 



          <li >Top-natch performance</li>
          <li>Clutter-free and easy to understand UI.</li>
          <li>Location independent; manage from <br />anywhere in the world using the app.</li>
          <li>Lorem ipsum etc etc.</li>


        </ul>
        </Col>
        <Col lg={{span: 11, order:2}} md={11} sm={24} xs={24}   >
       <div style={{padding:"50px 130px 50px 150px"}}>
        <Card  style={{ background:"#c7c1c1"}}>
          <Typography.Title level={1} style={{fontFamily:"Arial" }}> $499 </Typography.Title>
          
          <li><CheckCircleFilled/> Unbeatable pricing.</li> <br />
          <li><CheckCircleFilled/> High coustomizability.</li> <br />
          <li><CheckCircleFilled/> Affordable and user-friendly.</li> <br />
          
          
          <Button style={{background:'orange',fontFamily:"Arial" , textAlign:"center" }} type="primary" htmlType="submit"><Link to="/login" > Buy Now</Link></Button>
        </Card>
        </div>
      </Col>
           

    

      
      
      

       


     </>
    </Row>

    </>

   

  )
}

export default PricingSection