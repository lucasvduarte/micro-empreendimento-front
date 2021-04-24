import { Route, Switch } from 'react-router-dom';
import CorporateCommunicated from './Produtc.component';
import Register from './register/Register.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/estoque" component={CorporateCommunicated} />
            <Route exact path="/estoque/novo-produto" component={Register} />
            <Route exact path="/estoque/view-produto/:id" component={() => <Register />} />
            <Route exact path="/estoque/editar-produto/:id" component={() => <Register />} />
            <Route component={() => <>NotFoundRedirect</>} />
        </Switch>
    );

}

export default Routes;