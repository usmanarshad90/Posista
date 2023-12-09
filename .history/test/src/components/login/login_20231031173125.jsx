import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/background.jpg';
import { Form, Input, Button, Row, Col, Image, Checkbox, Card, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const Login = () => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div >
      <Row gutter={[0,0]}>
        <Col lg={{span: 12, order: 1 }} md={20} xs={20}>
          <Card style={{  height: '100%', border: 'none' }}

          >
            <Typography.Title style={{ textAlign: 'center' }}>ToDo List</Typography.Title>
            <Card style={{ textAlign: 'center',border:'none' }} >
              <Form  layout="vertical" style={{ paddingLeft: 150, maxWidth: 500 }}

              
              name="basic"
              initialValues={{
                remember: true,
                
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
               
              >
                <Button style={{width:'400'}} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            </Card>
          </Card>
        </Col>
        <Col lg={{ span: 12, order: 2 }} md={20} xs={20}>
          <Image width={'100%'} preview={false} height={'114%'} src={img} alt="#" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
