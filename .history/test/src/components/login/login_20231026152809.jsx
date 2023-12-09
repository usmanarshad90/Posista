
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Col, Row } from 'antd'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (

    // <Row>
    <div className="login-container">

      <Row  >
        <Col xs={24} sm={24} md={12} lg={24} xl={24}>
          <div className="login-box" >
            <h1>To D0 List</h1>
            <h2>Login</h2>
            <p>Don't have an account?<Link to="/signup"><Button type="link" htmlType="button">Rejister</Button></Link></p>
            <Form name="login-form" className='form' onFinish={onFinish} >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={0} sm={0} md={12} lg={12} xl={12}>
        </Col>
      </Row>
    </div>
    // </Row>
  );
};

export default Login;
