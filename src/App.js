import React from "react";
import "./assets/App.css";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";

const store = configureStore(window.__PRELOADED_STATE__);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/reset-password/:resetToken"
            component={ResetPassword}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
