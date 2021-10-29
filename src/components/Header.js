import React from "react";
import { Link } from "react-router-dom";
//import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <h1 to="/reactjs-beer-lovers">Beer Lovers</h1>
          </div>

          <ul className="nav-links">
            <li>
              <h2 to="/reactjs-beer-lovers" className="btn btn-main">
                Home
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
