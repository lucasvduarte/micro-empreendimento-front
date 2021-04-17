import { Route, Switch } from 'react-router-dom';
import CorporateCommunicated from './Sale.component';
import Register from './register/Register.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/venda" component={CorporateCommunicated} />
            <Route exact path="/venda/nova-venda" component={Register} />
            <Route exact path="/venda/view-venda/:id" component={() => <Register />} />
            <Route exact path="/venda/editar-venda/:id" component={() => <Register />} />
            <Route component={() => <>NotFoundRedirect</>} />
        </Switch>
    );

}

export default Routes;