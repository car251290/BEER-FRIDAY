import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
//import LinesEllipsis from "react-lines-ellipsis";
import StarsIcon from "@material-ui/icons/Stars";
import { Card,CardActions,CardContent, CardMedia, IconButton, Typography,} from '@material-ui/core';
import { Scrollbar } from "react-scrollbars-custom";
//import { styled } from '@mui/material/styles';
//import Collapse from '@mui/material/Collapse';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const ResultCard = ({ beer }) => {
  const [colorClass, setColorClass] = useState("");
  const { addItemToFavouriteList, favourite } = useContext(GlobalContext);
  const storedItemWatched = favourite.find((o) => o.id === beer.id);
  const watchedDisabled = storedItemWatched ? true : false;
 


  return (
    <Card  sx={{ maxWidth: 345 }}  style={{backgroundColor: "white"}} className="result-card">
      <Link to={`${beer.id}`}></Link>
     
      <CardContent>

     
          <CardMedia height="140">
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

          

          </CardMedia>
   
      
     
          <Scrollbar style={{ width: 250, height: 250 }}>
          <Typography paragraph display="block" variant="caption"color="text.secondary" mt={2}>
              <text>{beer.description}</text>
            </Typography>
           </Scrollbar>
      

     
           <button
          
          disabled={watchedDisabled}
          onClick={ () => addItemToFavouriteList(beer)}
        >  
         <StarsIcon variant="contained"
           className={colorClass}
           onClick={() => setColorClass("activecolor")}
           //onClick={ () => addItemToFavouriteList(beer)}
          >
          </StarsIcon>
        </button>
      </CardContent>
    </Card>
  );
};
