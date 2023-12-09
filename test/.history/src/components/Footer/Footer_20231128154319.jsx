import React from 'react';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Footer = () => {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the columns horizontally
    alignItems: 'center', // Center the columns vertically
  };

  const columnStyle = {
    padding: '12px',
    textAlign: 'center', // Center text within each column
    color: 'black',
  };

  const textStyle = {
    textAlign: 'center', // Center the text horizontally
    display: 'inline-block', // Keep text centered within the column
  };

  return (
    <Row style={rowStyle}>
      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={columnStyle}>
        <Typography.Title className="logo">
          <Link to={'/'}>
            <img src={logoimage} alt="" width="28%" />
          </Link>
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Contact: +92 300 1234567
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Email: pasisto@gmail.com
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Find us on: <FacebookOutlined /> <InstagramOutlined /> <WhatsAppOutlined />
        </Typography.Title>
      </Col>

      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={columnStyle}>
        <Typography.Title level={4} style={textStyle}>
          Navigation
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          <Link to={'/pricing'} style={{ color: 'black' }}>
            Pricing
          </Link>{' '}
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          <Link to={'/solution'} style={{ color: 'black' }}>
            Solutions
          </Link>
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          <Link to={'/about'} style={{ color: 'black' }}>
            Categories
          </Link>
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          <Link to={'/about'} style={{ color: 'black' }}>
            About Us
          </Link>
        </Typography.Title>
      </Col>

      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={columnStyle}>
        <Typography.Title level={4} style={textStyle}>
          Resources
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Blog
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          How POS works
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Community
        </Typography.Title>
        <Typography.Title level={5} style={textStyle}>
          Privacy Policy
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default Footer;
