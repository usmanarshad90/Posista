import React from 'react'
import { Layout, Menu, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
import { FacebookOutlined,InstagramOutlined , WhatsAppOutlined} from '@ant-design/icons';
// const {PageFooter}=Layout;




const Footer = () => {
  const style = {
    background: '',
    padding: '8px ',
    text_align:'center',
    
    
  };

  
  return (
    <Row><Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8}  >
      
      <div style={style} className="logo" > 
      
      <Link to={'/'}><img src={logoimage} alt="" width="100px"  /></Link>
      </div>
      <div style={style}>Contact: +92 300 1234567</div>
      <div style={style}>Email: pasisto@gmail.com</div>
      <div style={style}>Find us on: <FacebookOutlined  /> <InstagramOutlined /> <WhatsAppOutlined /></div>

      </Col>

      <Col  lg={{ span:8, order: 1 }} md={6} xs={4} xl={8} xxl={8}  style={style}>
      <Typography.Title level={5}>Navigation </Typography.Title>
      <Menu  mode="vertical"  >
        <Link to={'/pricing'} ><Menu.Item key="1" >Pricing</Menu.Item></Link>
        
        
        <Link to={'/solution'} ><Menu.Item key="2" >Solutions</Menu.Item></Link>
        
        <Link to={'/about'} ><Menu.Item key="3" >About Us</Menu.Item></Link>
      </Menu>
     
      </Col>
     
      




    </Row>
    
  )
}

export default Footer