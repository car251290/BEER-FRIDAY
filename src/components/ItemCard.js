import React, { useContext } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
//import LinesEllipsis from "react-lines-ellipsis";
//import StarIcon from '@mui/icons-material/Star';
//import StarIcon from "@material-ui/icons/Star";
import { Card,CardContent,Typography,CardMedia} from '@material-ui/core';

export const ItemCard = ({ beer }) => {
  const { removeFromfavourite } = useContext(GlobalContext);

  return (
    <Card style={{backgroundColor: "white"}} sx={{ maxWidth: 345 }} className="result-card">
      <Link to={`/movie/${beer.id}`}></Link>
      <div className="poster-wrappers1">
        <button className="btn2"
         onClick={() => removeFromfavourite(beer.id)}>  
         Remove the beer
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

          <Typography variant="body3" color="text.secondary" mt={2}>
              <text>{beer.description}</text>
            </Typography>
        </div>
      </div>
    </Card>
  );
};