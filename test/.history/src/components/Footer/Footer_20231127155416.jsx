import React from 'react'
import { Layout, icon, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
const {PageFooter}=Layout;
const Footer = () => {
  return (
    <Row>
      <Col  lg={{ span:8, order: 1 }} md={24} xs={24} xl={24} xxl={8}  style={{background:'wheat'}}>
      <div className="logo" > 
      
      <Link to={'/'}><img src={logoimage} alt="" width="100px"  /></Link>
        </div>
      </Col>




    </Row>
    
  )
}

export default Footer