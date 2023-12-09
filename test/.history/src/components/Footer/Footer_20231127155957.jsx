import React from 'react'
import { Layout, icon, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
const {PageFooter}=Layout;
const Footer = () => {
  return (
    <Row>
      <Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8}  style={{background:'wheat'}}>
      <div className="logo" > 
      
      <Link to={'/'}><img src={logoimage} alt="" width="100px"  /></Link>
      </div>
      <div>Contact: +92 300 1234567</div>
      <div>Email: pasisto@gmail.com</div>
      <div>Find us on:i</div>

      </Col>




    </Row>
    
  )
}

export default Footer