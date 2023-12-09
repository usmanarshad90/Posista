import React from 'react';
import { Layout, Menu, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import logoImage from '../../images/posistologo.png';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: 'transparent', textAlign: 'center' }}>
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Link to="/">
              <img src={logoImage} alt="" width="100px" />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={16} lg={16} xl={16}>
            <Menu mode="horizontal" style={{ color: 'black', backgroundColor: 'transparent' }}>
              <Menu.Item key="1">
                <Link to="/pricing">Pricing</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/solution">Solutions</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About Us</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Menu mode="horizontal" style={{ color: 'black', backgroundColor: 'transparent' }}>
              <Menu.Item key="1">
                <Link to="/pricing">Pricing</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/solution">Solutions</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About Us</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col>
            <Link to="/login">
              <Button type="primary" style={{ marginRight: '10px', backgroundColor: 'orange' }}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button type="primary" style={{ backgroundColor: 'grey' }}>
                Sign Up
              </Button>
            </Link>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default PageHeader;
