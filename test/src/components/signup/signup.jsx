import React from 'react';
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Link } from 'react-router-dom';
import img from '../../images/background.jpg';
import { Form, Input, Button, Row, Col, Image, Checkbox, Card, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography,Flex } from 'antd';

const SignUp = () => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Here, you can add logic to handle the signup data.
  };

  return (
    
    <>
    <PageHeader/>
    <div >
    <Row lg={{span:6}}  >
        <Col lg={{span: 24 }} md={12} xs={6} xxl={24} style={{ textAlign:'center'}}>
          
        <div style={{ textAlign:"center",fontFamily:"Roboto" ,fontSize:"25px", padding:'2%'}}>
          The hassle of efficiently managing your <br></br> 
          restaurant is now a thing of the past! <br></br>
          
          <strong style={{ color: 'orange' }}>Rejister now</strong>
          <strong style={{ color: 'black' }}> to get started </strong>
        </div>
        <Card   >
              
              <Form layout="" 
                
                name="basic"
                initialValues={{
                  remember: true,
                  
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row>
              <Col  lg={{span:8, order:1}} md={6} xs={4} ></Col>
              <Col  lg={{span:8, order:2}} md={6} xs={4} >
                <Form.Item style={{textAlign:"center"}}
                
                  
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                <Input placeholder="Email/Contact" />
                </Form.Item>
                </Col>
                <Col  lg={{span:8, order:3}} md={6} xs={4} ></Col>
                </Row>
                <Row>
                <Col  lg={{span:8, order:1}} md={6} xs={4} ></Col>
                <Col lg={{span:8, order:2}} md={6} xs={4} >
                <Form.Item
                
                  
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
                </Col>
                <Col  lg={{span:8, order:3}} md={6} xs={4} ></Col>

                </Row>
                <Row>
                <Col  lg={{span:8, order:1}} md={6} xs={4} ></Col>
                <Col lg={{span:8, order:2}} md={6} xs={4} >
                <Form.Item
                  name="confirmPassword"
                  
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>

                </Col>
                <Col  lg={{span:8, order:3}} md={6} xs={4} ></Col>
                </Row>
                <Form.Item  >
               
                  <Button  style={{width:'8%', background:"orange"}} type="primary" htmlType="submit" >
                    Sign Up
                  </Button>
                  <p style={{textAlign:'center'}}>Already have a Account? <Link to="/login" style={{color:'orange'}}>Login</Link> </p>
                </Form.Item>
              </Form>
            </Card>
          
        </Col>
        
      </Row>
    </div>
    <PageFooter/>

    </>
  );
};

export default SignUp;
