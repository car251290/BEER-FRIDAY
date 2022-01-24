import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
//import LinesEllipsis from "react-lines-ellipsis";
import StarsIcon from "@material-ui/icons/Stars";
import { Card,CardContent, Typography,} from '@material-ui/core';

export const ResultCard = ({ beer }) => {
  const [colorClass, setColorClass] = useState("");
  const { addItemToFavouriteList, favourite } = useContext(GlobalContext);
  const storedItemWatched = favourite.find((o) => o.id === beer.id);
  const watchedDisabled = storedItemWatched ? true : false;
  
  return (
    <Card  sx={{ maxWidth: 345 }}  style={{backgroundColor: "white"}} className="result-card">
      <Link to={`${beer.id}`}></Link>

      <div className="poster-wrappers1">
        <button
          className="btn1"
          disabled={watchedDisabled}
          onClick={ () => addItemToFavouriteList(beer)}
        >  
         <StarsIcon variant="contained"
           className={colorClass}
           onClick={() => setColorClass("activecolor")}
          >
          </StarsIcon>

        </button>
        <div>
          {beer.image_url ? (
            <img
            height="100%" width="100%"
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
          <CardContent>
            <Typography paragraph display="block" variant="caption"color="text.secondary" mt={2}>
              <text>{beer.description}</text>
            </Typography>
            </CardContent>
        
        </div>
      </div>
      
    </Card>
  );
};
