import { Layout, Row, Menu } from 'antd'
import { Link } from 'react-router-dom';

const NavBar = () => {
     
    return (
        <Layout.Header className="layout" >
            <Row justify="end">
                <Menu theme="dark" mode="horizontal" selectable={false} >
                    <Link to="/">
                        <Menu.Item  key='1'> На главную</Menu.Item>  
                    </Link>
                    <Link to="/report">
                        <Menu.Item  key='2'> Отчет </Menu.Item>
                    </Link>
                    <Link to="/profile">
                        <Menu.Item  key='3'> Профиль </Menu.Item>
                    </Link>
                    <Link to="/login">
                        <Menu.Item  key='4'> Войти </Menu.Item>
                    </Link>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;