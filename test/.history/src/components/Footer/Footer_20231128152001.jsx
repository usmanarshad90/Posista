import React from 'react';
import { Layout, Menu, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logoimage from '../../images/posistologo.png';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Footer = () => {
  const columnStyle = {
    padding: '12px',
    textAlign: 'center', // Center text within each column
    color: 'black',
  };

  const textStyle = {
    textAlign: 'left', // Align text to the left inside each column
    color:'black',

  };
  const typoStyle={
    textAlign: 'center',
  }

  return (
    <Row>
      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={columnStyle}>
        <div className="logo">
          <Link to={'/'}>
            <img src={logoimage} alt="" width="100px" />
          </Link>
        </div >
        <div style={columnStyle}>Contact: +92 300 1234567</div>
        <div style={columnStyle}>Email: pasisto@gmail.com</div>
        <div style={columnStyle}>
          Find us on: <FacebookOutlined />    <InstagramOutlined />    <WhatsAppOutlined />
        </div>
      </Col>

      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={typoStyle}>
        <Typography.Title level={4}>Navigation </Typography.Title>
        <Typography.Title level={5}>
          <Link to={'/pricing'} style={textStyle}>
            Pricing
          </Link>{' '}
        </Typography.Title>
        <Typography.Title level={5}>
          <Link to={'/solution'} style={textStyle}>
            Solutions
          </Link>
        </Typography.Title>
        <Typography.Title level={5}>
          <Link to={'/about'} style={{ color: 'black' }}>
            Categories
          </Link>
        </Typography.Title>
        <Typography.Title level={5}>
          <Link to={'/about'} style={{ color: 'black' }}>
            About Us
          </Link>
        </Typography.Title>
      </Col>

      <Col lg={{ span: 8, order: 1 }} md={6} xs={4} xl={8} xxl={8} style={columnStyle}>
        <Typography.Title level={4}>Resources</Typography.Title>
        <Typography.Title level={5}>Blog</Typography.Title>
        <Typography.Title level={5}>How POS works</Typography.Title>
        <Typography.Title level={5}>Blog</Typography.Title>
        <Typography.Title level={5}>Blog</Typography.Title>
        <div style={columnStyle}>How POS works</div>
        <div style={columnStyle}>Community</div>
        <div style={columnStyle}>Privacy Policy</div>
      </Col>
    </Row>
  );
};

export default Footer;
