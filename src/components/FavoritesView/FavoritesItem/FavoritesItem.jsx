import React from 'react';
import CategorySelector from './CategorySelector/CategorySelector';
import { useDispatch } from "react-redux";

// Import MUI components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function FavoritesItem({ gif }) {
    const dispatch = useDispatch();

    const removeGif = () => {
        console.log("delete", gif.id);
        dispatch({ type: "DELETE_GIF", payload: gif.id});
        //need refresh
      };



    return (
        <Card key={gif.id} sx={{ maxWidth: 400, margin: 3 }}>
            <CardMedia
                component="img"
                image={gif.url}
                height="300"
                alt={gif.alt}
            />
            <CardActions>
                <CategorySelector key={gif.id} gif={gif} />
                <Button onClick={removeGif}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default FavoritesItem;
