import {
    RESTURANT_LIST_FAIL,
    RESTURANT_LIST_SUCCESS,
    RESTURANT_LIST_REQUEST,
  } from "../constants/resturantconstants";

  export const reducerResturant=(states={resturants:[]},actions)=>{
      // eslint-disable-next-line default-case
      switch(actions.type)
      {
          case RESTURANT_LIST_SUCCESS:
          return{resturant:actions.payload}
      }
  }