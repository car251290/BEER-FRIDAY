import React from "react";
import { Link } from "react-router-dom";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import { Button} from '@material-ui/core';
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/reactjs-beer-lovers">Beer Lovers</Link>
          </div>

          <ul className="nav-links">
          <Button  variant="contained" style={{backgroundColor: "#dd791c"}} >
              <Link to="/favorite">
                Favourites Beers
                <FavoriteSharpIcon className="faviort-icon" />
              </Link>
            </Button>
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
