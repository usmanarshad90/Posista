
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/background.jpg';
import { Form, Input, Button, Row, Col, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (

    // <Row>
    <div>

      <Row gutter={[24,24]}  >
        <Col  lg={12}>
          <Image src=i alt='#' />

        </Col>
      </Row>
    </div>
    // </Row>
  );
};

export default Login;