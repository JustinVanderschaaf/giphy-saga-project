import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function GiphList() {
  const dispatch = useDispatch();
  const giphList = useSelector((store) => store.searchReducer);
  console.log("giphList", giphList);

  const addFavorite = (search) => {
    dispatch({ type: "POST_FAV", payload: search });
  };

  return (
    <>
      <h1>Gifist</h1>
      <ul>
        {giphList.data?.map((search) => {
          return (
            <li key={search.id}>
              {/* <img src={search.images.downsized_small.mp4} alt={search.title}/> */}
              <video controls loop autoPlay width="250">
                <source
                  src={search.images.downsized_small.mp4}
                  type="video/mp4"
                />
              </video>
              <button onClick={() => addFavorite(search)}>Favorite</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default GiphList;
