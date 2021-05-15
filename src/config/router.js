import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import Home from "../containers/home";
import Login from "../containers/login";
import SignUp from "../containers/signup";




function AppRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route path="*" component={() => <h2>404 Not Found </h2>} />
            </Switch>
        </Router>
    )

}
export default AppRouter;