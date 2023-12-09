
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (

    // <Row>
    <div>

      <Row gutter={[24,24]}  >
        <Col ></Col>
      </Row>
    </div>
    // </Row>
  );
};

export default Login;
