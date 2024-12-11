import React from 'react';
import AuthLayout from '../components/Layout/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';
import img from '../assets/3429125.jpg'

const Login = () => {
  return (
    <AuthLayout
      title="Good to see you again"
      subtitle="Login in to your account"
      alternativeAction={{
        text: "Don't have an account?",
        linkText: 'Register',
        href: "/register",
      }}
    >
      {/* <img src={img} alt="" /> */}
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;