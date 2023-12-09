import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      {/* Sign-up form fields */}
      <Link to="/login">Login</Link>
    </div>
  );
};
// SignUp.js
import React from 'react';
import { Form, Input, Button } from 'antd';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: 400 }}
      >
        {/* Sign-up form fields */}
      </Form>
    </div>
  );
};

export default SignUp;
