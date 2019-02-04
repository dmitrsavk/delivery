import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Privacy from "./Privicy";

class Root extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={() => <App />} />
            <Route path="/privacy" component={() => <Privacy />} />
          </div>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
