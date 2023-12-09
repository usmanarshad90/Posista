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
      <Row gutter={[24, 24]}>
        <Col lg={{span: 12, order: 1 }} md={24} xs={24}>
          <Card style={{ width: '104%', height: '600px' }}>
            <Typography.Title style={{ textAlign: 'center' }}>ToDo List</Typography.Title>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* Your form input fields here */}
            </Form>
          </Card>
        </Col>
        <Col lg={{ span: 12, order: 2 }} md={24} xs={24}>
          <div style={{ height: '600px', overflow: 'hidden' }}>
            <Image width={'100%'} height={'100%'} src={img} alt="#" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
