
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

    // <Row>
    <div className='container'>

      <Row gutter={[24,24]}  >
       <Space.Compact>
        
       </Space.Compact>
      </Row>
    </div>
    // </Row>
  );
};

export default Login;
