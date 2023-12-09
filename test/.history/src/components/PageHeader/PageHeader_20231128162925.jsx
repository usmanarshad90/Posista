import React from 'react'
import { Layout, Menu, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png'
import {HomeOutlined, UserOutlined,SettingOutlined,} from '@ant-design/icons';

const { Header } = Layout;
const PageHeader = () => {
  return (
    <Row>
      <Col lg={24} xl={24} md={12} xs={4} >
    <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' ,backgroundColor: 'white' }}>
      <div className="logo"  > 
      
      <Link to={'/'}><img src={logoimage} alt="" width="100px" paddingTop="5px" /></Link>
        </div>
      <Menu  mode="horizontal" style={ {backgroundColor: 'transparent'}} >
        <Link to={'/pricing'} style={{color:'black'}} ><Menu.Item key="1" >Pricing</Menu.Item></Link>
        
        
        <Link to={'/solution'}style={{color:'black'}}><Menu.Item key="2" >Solutions</Menu.Item></Link>
        
        <Link to={'/about'} style={{color:'black'}}><Menu.Item key="3" >About Us</Menu.Item></Link>
      </Menu>

      <div>

        <Link to="/login"><Button type="primary" style={{ marginRight: '10px', backgroundColor: 'orange' }}>Login</Button>
        </Link>
        <Link to="/signup"><Button type="primary" style={{ marginRight: '10px', backgroundColor: 'grey' }}>Sign Up</Button></Link>
      </div>




    </Header>
  </Layout>
  </Col>
  </Row>
  
  )
}

export default PageHeader;