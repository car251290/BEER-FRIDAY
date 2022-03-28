import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import StarsIcon from "@material-ui/icons/Stars";
import { Card,CardActions,CardContent, CardMedia, Typography,Box} from '@material-ui/core';
import { Scrollbar } from "react-scrollbars-custom";

export const ResultCard = ({ beer }) => {
  const [colorClass, setColorClass] = useState("");
  const { addItemToFavouriteList, favourite } = useContext(GlobalContext);
  const storedItemWatched = favourite.find((o) => o.id === beer.id);
  const watchedDisabled = storedItemWatched ? true : false;

  return (
    <Card display="inline-block" sx={{ maxWidth: 300 }}  style={{backgroundColor: "white"}} className="result-card">
      <Link to={`${beer.id}`}></Link>
      <CardContent display = "inline-block" sx={{maxWidth:100}} >
          <CardMedia height="130">
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
          
           <button    
          disabled={watchedDisabled}
          onClick={ () => addItemToFavouriteList(beer)}
        >  
         <StarsIcon variant="contained"
          className={colorClass}
           onClick={() => setColorClass("activecolor")}
          
          >
          </StarsIcon>
        </button>
      </CardContent>

      <CardActions>
        <Scrollbar style={{ width: 250, height: 250 }}>
          <Box display="flex" justifyContent="space-between" my={2}>
        <Typography  variant="body2" display="inline-block"  color="text.secondary" mt={2}>
              <text >{beer.description}</text>
            </Typography>
          </Box>
        </Scrollbar>
      </CardActions>
    </Card>
  
  );
};
