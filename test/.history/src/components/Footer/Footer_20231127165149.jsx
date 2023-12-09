import React from 'react'
import { Layout, icons, Row, Col } from 'antd';
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
      <Ty

      </Col>
     
      




    </Row>
    
  )
}

export default Footer