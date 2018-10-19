import { GET_PHOTOS } from "./types";
import { API_KEY } from "../utils/api";
import axios from "axios";

export const getPhotos = () => dispatch => {
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=marilyn%2Cmonroe&tag_mode=all&per_page=9&format=json`
    )
    .then(res =>
      dispatch({
        type: GET_PHOTOS,
        payload: res.data
      })
    );
};
