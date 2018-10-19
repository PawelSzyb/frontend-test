import { GET_PHOTOS } from "./types";
import { API_KEY } from "../utils/api";

export const getPhotos = () => dispatch => {
  fetch(
    `https://api.flickr.com/services/rest/?${API_KEY}&format=json&method=flickr.galleries.getPhotos&per_page=9`
  )
    .then(res =>
      dispatch({
        type: GET_PHOTOS,
        payload: res.data
      })
    )
    .catch(console.log(err));
};
