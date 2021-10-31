import { Layout, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {isAuth} = useSelector(state => state.auth);
    return (
        <Layout.Header className="layout"  >
            <Row justify="start">
                 
                <Menu theme="dark" mode="horizontal"   selectable={false} >
                        <Menu.Item  key='1'>
                            <Link to="/"> На главную </Link>
                        </Menu.Item>  
                        <Menu.Item  key='2'>  
                            {isAuth ? <Link to="/report">Отчет</Link> : null} 
                        </Menu.Item>
                        <Menu.Item  key='3'> 
                            <Link to={isAuth ? "/profile" : "/login" }>Профиль</Link>
                        </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;