import { Layout, Row, Menu } from 'antd'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {isAuth, user} = useSelector(state => state.auth);
    return (
        <Layout.Header className="layout" >
            <Row justify="end">
                <Menu theme="dark" mode="horizontal" selectable={false} >
                    <Link to="/">
                        <Menu.Item  key='1'> На главную</Menu.Item>  
                    </Link>
                    {isAuth ? <Link to="/report">
                        <Menu.Item  key='2'> Отчет </Menu.Item>
                    </Link> : null}
                    <Link to={isAuth ? "/profile" : "/login" }>
                        <Menu.Item  key='3'> Профиль </Menu.Item>
                    </Link>
                    
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;