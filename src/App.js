import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input } from 'semantic-ui-react';

import Search from './Pages/Search/Search';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/search">
                        <Search/>
                    </Route>
                    {/* <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route> */}
                </Switch>   
            </Router >
        )
    }
}

export default App;