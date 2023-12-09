
import React from 'react';

import { Form, Input, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';



const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    
    

    <div className='background' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: 600,  background: ''}}
        
      >
        <Form.Item
          
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        {/* <FormItem><button><Link to="/signup">Sign Up</Link></button></FormItem>
      </Form> */}
    </div>
  );
};

export default Login;
