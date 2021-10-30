
import { Switch, Route, Redirect } from 'react-router';
 
import { useSelector } from 'react-redux';
 
import { Login, MainPage, Profile, Report } from '../pages';
 

const AppRouter = () => {
    const {isAuth} = useSelector(state => state.auth);
    
    return (
        <div> 
            {isAuth ?
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Redirect to="/"/>
                </Switch>
                : null
                
            }    
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={Login} />
            <Route path="/report" component={Report} />        
        </div> 
    );
};

export default AppRouter;