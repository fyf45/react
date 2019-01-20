import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from "./history"
import routes from './routes';
import Error404 from '../pages/error404';


export default class AppRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        {routes.map(item => {
                            return (
                                <Route key={item.path} exact path={item.path} component={item.component}/>
                            );
                        })}
                        <Route component={Error404}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}