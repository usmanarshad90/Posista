import React from 'react'
import { Layout, Menu, Button, Row } from 'antd';
import { Link } from 'react-router-dom';
import posistologo from '../../images/posistologo.png';

import logoimage from '../../images/posistologo.png'
import {HomeOutlined, UserOutlined,SettingOutlined,} from '@ant-design/icons';

const { Header } = Layout;
const PageHeader = () => {
  return (
    <Row gutter={}>
    <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' ,backgroundColor: 'transparent' }}>
      <div className="logo" > 
      <Link to={'/'}><img src={logoimage} alt="" width="100px" /></Link>
        </div>
      <Menu  mode="horizontal" style={ {color:'black',backgroundColor: 'transparent'}} >
        <Link to={'/pricing'} ><Menu.Item key="1" >Pricing</Menu.Item></Link>
        
        
        <Link to={'/solution'} ><Menu.Item key="2" >Solutions</Menu.Item></Link>
        
        <Link to={'/about'} ><Menu.Item key="3" >About Us</Menu.Item></Link>
      </Menu>

      <div>

        <Link to="/login"><Button type="primary" style={{ marginRight: '10px', backgroundColor: 'orange' }}>Login</Button>
        </Link>
        <Link to="/signup"><Button type="primary" style={{ marginRight: '10px', backgroundColor: 'grey' }}>Sign Up</Button></Link>
      </div>
      </Row>



    </Header>
  </Layout>
  )
}

export default PageHeader;