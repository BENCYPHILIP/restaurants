import {
  RESTURANT_LIST_FAIL,
  RESTURANT_LIST_SUCCESS,
  RESTURANT_LIST_REQUEST,
} from "../constants/resturantconstants";

import axios from "axios";

export const actionresturant = () => async (dispatch) => {
  // eslint-disable-next-line no-lone-blocks
  {
    try {
      dispatch({ type: RESTURANT_LIST_REQUEST })
      const { data } = await axios.get("/resturant.json");
      dispatch({type:RESTURANT_LIST_SUCCESS,payload:data.restaurants})
    } catch (error) {
        dispatch({type:RESTURANT_LIST_FAIL,payload:error})
    }
  }
};
