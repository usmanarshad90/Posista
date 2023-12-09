import React from 'react'
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../images/posistologo.png'
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const PageHeader = () => {
  return (
    <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' ,background :'white' }}>
      <div className="logo" > 
      <Link to={'/'}><img src={logoimage} alt="" width="100px" /></Link>
        </div>
      <Menu  mode="horizontal" style={ {color:'black', background:'white'}} >
        <Link to={'/pricing'} ><Menu.Item key="1" >Pricing</Menu.Item></Link>
        
        
        <Link to={'/solution'} ><Menu.Item key="2" >Solutions</Menu.Item></Link>
        
        <Link to={'/about'} ><Menu.Item key="3" >About Us</Menu.Item></Link>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' ,backgroundColor:'orange',text }}>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </Header>
  </Layout>
  )
}

export default PageHeader;