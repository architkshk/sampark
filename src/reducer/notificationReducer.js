import {GET_NOTIFICATION,ADD_NOTIFICATION} from "../actions/types";

const initialState={
  notification:{},
};


export default (state = initialState , action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return state;
    case GET_NOTIFICATION:
      return{
        ...state,
        notification: [...state.notification,action.payload]
      };
    default:
      return state;
  }
};