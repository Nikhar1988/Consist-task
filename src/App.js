import { Layout, Row } from 'antd';
import { AppRouter, NavBar } from './components';





const App = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <Row justify="center" align="middle" className="h100">
          <AppRouter />
        </Row>

      </Layout.Content>
    </Layout>
  );
};

export default App;