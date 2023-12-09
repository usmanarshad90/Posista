import React from 'react';
import PageHeader from '../PageHeader/PageHeader'
import PageFooter from '../Footer/Footer'
import { Link } from 'react-router-dom';
import img from '../../images/background.jpg';
import { Form, Input, Button, Row, Col, Image, Checkbox, Card, Space, Flex } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography,strong } from 'antd';
import Column from 'antd/es/table/Column';

const Login = () => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <>
    <PageHeader/>
    <div >
      

        <div style={{ textAlign:"center",fontFamily:"Roboto" ,fontSize:"25px", padding:'2%'}}>
          The hassle of efficiently managing your <br></br> 
          restaurant is now a thing of the past! <br></br>
          
          <strong style={{ color: 'orange' }}>login</strong>
          <strong style={{ color: 'black' }}> to get started </strong>
        </div>
        <Row   >
        <Col lg={{span:24}} md={24} sm={24} xs={24} xl={24}  >

            <Card  style={{ textAlign: 'center',  display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
              <Form  layout="vertical"  
              

              
              name="basic"
              initialValues={{
                remember: true,
                
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              
              <Form.Item  
               
               
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

              <Form.Item style={{}}
                
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

              <Form.Item
                name="remember"
                valuePropName="checked"
                
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
               
              >
                <Button style={{width:'35%',background:'orange'}} type="primary" htmlType="submit">
                  Login
                </Button>
                <p style={{textAlign:'center'}}>Want to create a new account? <Link to="/signup" style={{color:'orange'}}>Signup</Link> </p>
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

export default Login;
