import { Route, Switch } from 'react-router-dom';
import CorporateCommunicated from './Produtc.component';
import Register from './register/Register.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/produto" component={CorporateCommunicated} />
            <Route exact path="/produto/novo-produto" component={Register} />
            <Route exact path="/produto/view-produto/:id" component={() => <Register />} />
            <Route exact path="/produto/editar-produto/:id" component={() => <Register />} />
            <Route component={() => <>NotFoundRedirect</>} />
        </Switch>
    );

}

export default Routes;