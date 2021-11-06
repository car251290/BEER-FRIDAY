import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import LinesEllipsis from "react-lines-ellipsis";
//import StarsIcon from "@material-ui/icons/Stars";
import { Card,Button} from '@material-ui/core';

export const ResultCard = ({ beer }) => {
  const [colorClass, setColorClass] = useState("");
  const { addItemToFavouriteList, favourite } = useContext(GlobalContext);
  let storedItemWatched = favourite.find((o) => o.id === beer.id);
  const watchedDisabled = storedItemWatched ? true : false;
  
  return (
    <Card  sx={{ maxWidth: 345 }}  style={{backgroundColor: "#dd791c"}} className="result-card">
      <Link to={`/movie/${beer.id}`}></Link>
      <div className="poster-wrappers1">
        <button
          className="btn1"
          disabled={watchedDisabled}
          onClick={ () => addItemToFavouriteList(beer)}
        >  
        <Button variant="contained"
           className={colorClass}
           onClick={() => setColorClass("activecolor")}
          >
            Favorite beer
          </Button>

        </button>

        <div>
          {beer.image_url ? (
            <img
              className="poster1"
              src={beer.image_url}
              alt={`${beer.name} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>
        <div className="title">
          <h3>{beer.name}</h3>

          <LinesEllipsis
            text={beer.description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </Card>
  );
};