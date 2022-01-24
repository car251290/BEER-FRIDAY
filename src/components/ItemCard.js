import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import { Card,CardContent,Typography,CardMedia,CardActions} from '@material-ui/core';

export const ItemCard = ({ beer }) => {
  const { removeFromfavourite } = useContext(GlobalContext);

  return (
    <Card style={{backgroundColor: "white"}} sx={{ minWidth: 200 }} className="result-card">
      <Link to={`${beer.id}`}></Link>

      <CardActions>

        <button className="btn2"
         onClick={() => removeFromfavourite(beer.id)}>  
         Remove the beer
        </button>
        </CardActions>

        <CardContent>

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
       
          <h3>{beer.name}</h3>
         
          <Typography display="block" variant="caption" color="text.secondary" mt={2}>
              <text>{beer.description}</text>
            </Typography>
            </CardContent>
    </Card>
  );
};
