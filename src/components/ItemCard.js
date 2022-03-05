import React, { useContext ,useState} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import { Card,CardContent,Typography,CardMedia,CardActions,Box} from '@material-ui/core';
import { Scrollbar } from "react-scrollbars-custom";
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import useStyles from './style';

export const ItemCard = ({ beer }) => {
  const { removeFromfavourite } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
   
    <Card display="inline-block"  sx={{ maxWidth: 300 }}  style={{backgroundColor: "white"}} className="result-card">
      <Link to={`${beer.id}`}></Link>

     <CardContent>
        <CardMedia height="100">
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
          <button className="btn2"
         onClick={() => removeFromfavourite(beer.id)}>  
         Remove the beer
        </button>
        <CardActions>
     
        
      
        <Scrollbar style={{ width: 300, height: 150 }}>
        <Box display="flex" justifyContent="space-between" my={2}>
        <Typography  display="block" variant="caption" color="text.secondary" mt={2}>
              <text >{beer.description}</text>
            </Typography>
        </Box>
        </Scrollbar>
     
      </CardActions>

      </CardContent>
   </Card>
  
  );
};
