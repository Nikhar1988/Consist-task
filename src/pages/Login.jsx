import { Card, Layout, Row } from 'antd';
import React from 'react';
import { LoginForm } from '../components';


const Login = () => {
    return (
        <Layout>
             <Row justify="center" align="bottom" className="h100">
                 <Card>
                     <LoginForm/>
                 </Card>               
             </Row>
        </Layout>
    )
}

export default Login;