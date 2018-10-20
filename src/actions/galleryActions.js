import { GET_PHOTOS } from "./types";
import axios from "axios";

export const getPhotos = () => dispatch => {
  axios
    .get(
      "https://cors.io/?http://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&tags=marilyn,monroe"
    )
    .then(res =>
      dispatch({
        type: GET_PHOTOS,
        payload: res.data
      })
    );
};
