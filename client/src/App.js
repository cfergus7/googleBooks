import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/pages/Home';
import Saved from './components/pages/Saved';

function App() {
    return (
        <Router>
                <div>
                    <AppBar color="primary" />
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    </Switch>
                </div>
        </Router>
    );
}

export default App;
