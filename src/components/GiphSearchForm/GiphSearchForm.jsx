import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GiphList from "../GiphList/GiphList";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

function GiphSearchForm() {
  const dispatch = useDispatch();
  const [newSearch, setNewSearch] = useState({
    searchQuery: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("new search!", newSearch);

    dispatch({
      type: "GET_SEARCH",
      payload: {
        search: newSearch,
      },
    });
  };

  return (
    <>
      <form>
        <Input
          required
          placeholder="Search Gifs"
          value={newSearch.searchQuery}
          onChange={(event) =>
            setNewSearch({
              ...newSearch,
              searchQuery: event.target.value,
            })
          }
        />
        <Button onClick={onSubmit}>SEARCH</Button>
      </form>
      <GiphList />
    </>
  );
}

export default GiphSearchForm;
