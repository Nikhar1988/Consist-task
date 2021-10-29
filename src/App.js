import { Layout } from 'antd';
import { Route } from 'react-router';
import { Login, MainPage, Profile, Report } from './pages';
import { NavBar } from './components';
import './App.css'; 



 const App = () => {
  return (
    <Layout>
      <NavBar/>
      <Layout.Content>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={Login}/>
        <Route path="/report" component={Report}/> 
        <Route path="/profile" component={Profile}/> 
      </Layout.Content>
    </Layout>
  );
};

export default App;
