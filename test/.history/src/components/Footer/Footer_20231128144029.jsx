import React from 'react'
import { Layout, Menu, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
import { FacebookOutlined,InstagramOutlined , WhatsAppOutlined} from '@ant-design/icons';
// const {PageFooter}=Layout;




const Footer = () => {
  const style = {
    background: '',
    text_align:'left',
    padding: ' 12px ',
    
    
    
  };

  
  return (
    <Row><Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={style} >
      
      <div style={style} className="logo" > 
      
      <Link to={'/'}><img src={logoimage} alt="" width="100px"  /></Link>
      </div>
      <div style={style}>Contact: +92 300 1234567</div>
      <div style={style}>Email: pasisto@gmail.com</div>
      <div style={style}>Find us on: <FacebookOutlined  /> <InstagramOutlined /> <WhatsAppOutlined /></div>

      </Col>

      <Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8}   >
      
      <Typography.Title level={4} >Navigation </Typography.Title>
     

      <Typography.Title level={5}>
      <Link to={'/pricing'} style={{color:'black'}}>Pricing</Link> </Typography.Title>
        
      <Typography.Title level={5}>
      <Link to={'/solution'} style={{color:'black'}}>Solutions</Link></Typography.Title> 
      <Typography.Title level={5}>
      <Link to={'/about'} style={{color:'black'}}>Categories</Link></Typography.Title>
      <Typography.Title level={5}>
      <Link to={'/about'} style={{color:'black'}}>About Us</Link></Typography.Title>
      
     
      </Col>
     
      <Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8}   >
        <Typography.Title level={4}>Resources</Typography.Title>
        <div style={style}>Blog</div>
        <div style={style}>How POS works</div>
        <div style={style}>Community</div>
        <div>Privacy Policy</div>
      </Col>




    </Row>
    
  )
}

export default Footer