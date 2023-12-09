import React from 'react'
import { Layout, Menu, Button } from 'antd';
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
      <div className="logo" style={{ color: 'white' }}> Logo</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>Profile</Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>Settings</Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </Header>
  </Layout>
  )
}

export default PageHeader