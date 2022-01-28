import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesItem from "./FavoritesItem/FavoritesItem";

// Import MUI components
import Grid from "@mui/material/Grid";

function FavoritesView() {
  // Store access, dispatch hook
  const favorites = useSelector((store) => store.favReducer);
  console.log("favorites are", favorites);
  const dispatch = useDispatch();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {favorites.map((gif) => (
        <Grid item xs={2} sm={4} md={4}>
          <FavoritesItem key={gif.id} gif={gif} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FavoritesView;
