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
        <Col lg={{span: 15The significance of this research is multifaceted. Firstly, it contributes to our understanding of how cloud computing can be leveraged by small businesses to enhance their competitiveness and operational efficiency. As cloud adoption rates increase among small enterprises, gaining insights into the specific factors that influence their decision-making can help cloud service providers tailor their offerings and support to better meet the needs of this segment.

Secondly, this research has broader societal implications. Small businesses are often major contributors to job creation and economic growth. Facilitating their access to cloud computing technologies can empower them to compete in the digital age, potentially bolstering local economies and fostering innovation.

In conclusion, this research delves into the realm of cloud computing adoption in small businesses, aiming to shed light on the unique dynamics at play in this context. Through its exploration of novelty and significance, it sets the stage for a study that can provide actionable insights for small businesses, technology providers, policymakers, and the broader economy.
}} md={24} xs={24}>
          <Card style={{ width: '100%' }}>
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
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
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
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col lg={{ span: 12, order: 2 }} md={24} xs={24}>
          <Image width={'100%'} src={img} alt="#" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
