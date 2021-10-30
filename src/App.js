import { Layout } from 'antd';
import { AppRouter, NavBar } from './components';
import './App.css';



const App = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
          <AppRouter/>
      </Layout.Content>
    </Layout>
  );
};

export default App;
