import React, { Component } from "react";
import routes from "./routes";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e77448',
        },
        secondary: {
            main: '#32c3f3',
        },
    },
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={createBrowserHistory()}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                component={route.layout(route.component)}
                            />
                        ))}
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
