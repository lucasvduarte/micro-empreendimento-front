import { Route, Switch } from 'react-router-dom';
import Menu from '../container/Menu.component';
import PrivateRoute from './PrivateRoute';
import Login from '../container/login/Login.component';
import User from '../container/user/register/Register.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/cadastrar' component={User} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute path='/' component={(() => <Menu />)} />
        </Switch>
    )
}

export default Routes;