import React from 'react'
import Navbar from '../components/navbar'
import Layout from './layout'

function Login() {
  return (
    <div>
        <Layout>
            <Navbar page="login" />
        </Layout>
    </div>
  )
}

export default Login