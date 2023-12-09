import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { message } from 'antd'; // Add this import

const SignUp = () => {
  const onFinish = (values) => {
    if (values.password !== values['confirm password']) {
      message.error('The two passwords do not match.');
    } else {
      console.log('Received values:', values);
    }
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two passwords do not match.'));
    },
  });

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className='signup'></div>
        H

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
            name="confirm password"
            rules={[
              { required: true, message: 'Please Confirm Your Password' },
              { validator: validateConfirmPassword },
            ]}
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
