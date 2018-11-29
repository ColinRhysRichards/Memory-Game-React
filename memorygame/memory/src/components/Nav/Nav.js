import React from "react";
import'../../styles/nav.css';

const Nav = props => (
  <nav className="nav-of-game">
    <h1 className="nav-title">
      Utah Jazz Memory Game
    </h1>

<div id="rw">{props.rightWrong}</div>

<div className="scores">
<div id="cur-sco">Current Score: {props.score}</div>

<div id="top-sco">Top Score: {props.topScore}</div>
</div>
  </nav>
);

export default Nav;
