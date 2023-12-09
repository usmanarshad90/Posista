import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className='signup'></div>
        <div className='logo'> <Link to="/"></Link></div>
        <h2>SignUp</h2>
        <p>If you have an account?<Link to="/login"><Button type="link" htmlType="button">Login</Button></Link></p>
        <Form name="signup-form" className='form' onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please Input Your Username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please Input Your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please Confirm Your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-button">
             Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
