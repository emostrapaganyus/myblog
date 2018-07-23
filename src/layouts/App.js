import React from "react";
import { hot } from "react-hot-loader";
/*import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    hashHistory
} from 'react-router-dom';*/

import Routes from "../routes";
import Header from "./Header";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header-container scroll-zero">
          <Header />
        </div>
        <div className="content-container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
