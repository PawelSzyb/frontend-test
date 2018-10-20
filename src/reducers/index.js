import { GET_PHOTOS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        gallery: JSON.parse(
          `${action.payload.substring(15, action.payload.length - 1)}`
        )
      };
    default:
      return state;
  }
}
