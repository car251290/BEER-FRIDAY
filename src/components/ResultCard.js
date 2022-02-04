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
    <div className={classes.container}> 
    <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "white"}} className="result-card">
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
        
    
          <button className="btn2"
         onClick={() => removeFromfavourite(beer.id)}>  
         Remove the beer
        </button>
        <CardActions>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
          Learn More 
        </Button>
        <Collapse in={open}>
        <div id="example-collapse-text">
        <Scrollbar style={{ width: 250, height: 250 }}>
        <Box display="flex" justifyContent="space-between" my={2}>
        <Typography  display="block" variant="caption" color="text.secondary" mt={2}>
              <text >{beer.description}</text>
            </Typography>
        </Box>
        </Scrollbar>
        </div>
      </Collapse>

      </CardActions>

      </CardContent>
   </Card>
  </div>
  );
};
