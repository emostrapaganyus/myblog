import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import "./style.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-container">
        <div className="logo-border">
          <img src={require("../../common/images/blog-logo.png")} draggable="false" />
          </div>
          <blockquote>
            <i>
              İçinde her an her şey olabilecek,<br />&nbsp;&nbsp; şahsımın kendisine ait blog sitesi!
            </i>
          </blockquote>
        </div>
        <div className="navigation-cont">
          <ul className="nav-list">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">POSTS</a>
            </li>
            <li>
              <a href="#">IMAGES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
