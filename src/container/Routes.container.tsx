import { Route, Switch } from "react-router-dom";
import Dashboard from './dashboard/Dashboard.component';
import Produtc from './produtc/Produtc.container';
import Sale from './sale/Sale.container';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Dashboard />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
            <Route path="/produto" component={() => <Produtc />} />
            <Route path="/venda" component={() => <Sale />} />
            <Route component={() => <>NotFoundRedirect</>} />
        </Switch>
    );
};

export default Routes;