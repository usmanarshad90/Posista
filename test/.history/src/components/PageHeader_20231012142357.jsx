import React from 'react'
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const PageHeader = () => {
  return (
    <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" > </div>
      <Menu theme="dark" mode="horizontal" >
        <Link  ><Menu.Item key="1" >Pricing</Menu.Item></Link>
        
        <Menu.Item key="2" >Solutions</Menu.Item>
        <Menu.Item key="3" >About Us</Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </Header>
  </Layout>
  )
}

export default PageHeader;