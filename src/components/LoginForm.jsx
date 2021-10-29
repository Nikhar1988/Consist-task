import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthActionCreators from '../redux/actions';

const LoginForm  = () => {
    //const {login} = AuthActionCreators;
    //console.log(login)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {error, isLoading} = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    
    const submit = () => {       
        console.log(username, password)
        dispatch(AuthActionCreators.login(username, password));
    };

    return (
        <Form onFinish= {submit}>
             {error && <div style={{color:'red'}}>
                    {error}
                </div>}
                <Form.Item
                    label="Имя пользователя"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        onChange={(e)=> setPassword(e.target.value)}
                        type={password} 
                    />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit" loading={isLoading} >
                    Войти
                    </Button>
                </Form.Item>
       </Form>
    );
};

export default LoginForm;