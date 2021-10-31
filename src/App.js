import { Layout, Row } from 'antd';
import { AppRouter, NavBar, ErrorBoundry } from './components';






const App = () => {
  return (
    <ErrorBoundry>
      <Layout>
        <NavBar />
        <Layout.Content>
          <Row justify="center" align="middle" className="h100">
            <AppRouter />
          </Row>
        </Layout.Content>
      </Layout>
    </ErrorBoundry>
  );
};

export default App;