
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { Login, MainPage, Profile, Report } from '../pages';

const AppRouter = () => {
    const { isAuth } = useSelector(state => state.auth);

    return (
        <div>
            {isAuth ? <Redirect to="/" /> : null}
            <Route path="/profile" component={Profile} />
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={Login} />
            <Route path="/report" component={Report} />
        </div>
    );
};

export default AppRouter;