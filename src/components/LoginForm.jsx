import { Form,Input, Button } from 'antd';

const LoginForm  = () => {
    return (
        <Form >
                <Form.Item
                    label="Имя пользователя"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                      
                     
                      />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit"  >
                    Войти
                    </Button>
                </Form.Item>
       </Form>
    )
}

export default LoginForm;