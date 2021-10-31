import { Card, Layout} from 'antd';
import React from 'react';
import { LoginForm } from '../components';


const Login = () => {
    return (
        <Layout>
            <Card>
                <LoginForm/>
            </Card>               
        </Layout>
    );
};

export default Login;