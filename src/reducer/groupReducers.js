import {ADD_GROUP} from "../actions/types";

const initialState={
  groups:[]
};

export default function(state=initialState, action) {
  switch (action.type){
    case ADD_GROUP:
      return{
        ...state,
        groups:[...state.groups,action.payload]
      };
    default:
      return state;
  }
}