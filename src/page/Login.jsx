import React from 'react';
import { Helmet } from 'react-helmet';
import LoginItems from '../components/login-items/LoginItems';
import LoginTitle from '../components/login-title/LoginTitle';
import Footer from '../components/footer/Footer';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | eCommers</title>
      </Helmet>
    <LoginTitle/>
    <LoginItems/>
    <Footer/>
    </>
  )
}

export default Login