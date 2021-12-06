import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Navigator
import Navigator from "./pages/navigator";
// Homepage
import Home from "./pages/home";
// Registration
import Register from "./pages/registor";
// Login
import Login from "./pages/login";
// Hints
import Flash from "./pages/flash";
// Personal center
import Personal from "./pages/personal";
// Auth
import Auth from './utils/auth';
// SurveyComponent
import Survey from './pages/survey';
// StudentTable
import studentTable from './pages/studentTable';




export default class App extends Component {
    render() {
        return (
            <Router>
                <Navigator/>
                <Flash/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/personal" component={Auth(Personal)}/>
                    <Route path="/survey" component={Survey}/>
                    <Route path="/studentTable" component={studentTable}/>
                </Switch>
            </Router>
        );
    }
}
