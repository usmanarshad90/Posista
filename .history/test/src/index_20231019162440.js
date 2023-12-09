import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #004d40, #009688);
  margin: 0;
}

.login-card {
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 300px;
  padding: 20px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.login-form-button {
  width: 100%;
}

.login-form-button:hover {
  background-color: #009688;
}


