import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
    return (
        <Router>
                <div>
                    <AppBar color="primary" />
                    <Switch>
                        <Route exact path={['/', '/search']}>
                            <Search />
                        </Route>
                        <Route exact path="/saved">
                            <Saved />
                        </Route>
                    </Switch>
                </div>
        </Router>
    );
}

export default App;
