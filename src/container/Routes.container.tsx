import { Route, Switch } from "react-router-dom";
import Dashboard from './dashboard/Dashboard.component';
import Produtc from './produtc/Produtc.container';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Dashboard />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
            <Route path="/produto" component={() => <Produtc />} />
            <Route component={() => <>NotFoundRedirect</>} />
        </Switch>
    );
};

export default Routes;