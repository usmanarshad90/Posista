
// import React from 'react';

// import { Form, Input, Button } from 'antd';



// const Login = () => {
//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   return (
    
    

//     <div className='background' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <Form
        
//         name="basic"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         style={{ width: 600,  background: ''}}
        
//       >
//         <Form.Item
          
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//         </Form.Item>
        
//       </Form>
//     </div>
//   );
// };

// export default Login;
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="logo">
    <Link to={'/'}>
      <img src={logoimage} alt="" width="100px" />
    </Link>
</div>
    
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
