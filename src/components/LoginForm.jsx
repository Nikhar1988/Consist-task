import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthActionCreators from '../redux/actions';

const LoginForm  = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {error, isLoading} = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    
    //тестирование ErrorBoundry  
    const testErrorBoundry =(username) => { 
        if (username === 'boom') {
            throw new Error('boom');
        };
    };


    const submit = () => {       
        dispatch(AuthActionCreators.login(username, password));
    };

    return (
        <Form onFinish= {submit}>
             {error && <div style={{color:'red'}}>
                    {error}
                </div>}
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
                >
                    <Input 
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input 
                        onChange={(e)=> setPassword(e.target.value)}
                        type={password} 
                    />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit" loading={isLoading} onClick={testErrorBoundry(username)}>
                    Войти
                    </Button>
                </Form.Item>
       </Form>
    );
};

export default LoginForm;