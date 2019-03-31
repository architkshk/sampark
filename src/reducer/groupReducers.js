import {ADD_GROUP,ALL_GROUP, MY_GROUPS, RECOMMENDED_GROUPS} from "../actions/types";

const initialState={
  createdGroup:[],
  allGroup:[],
  myGroups:[],
  recommendedGroups: []
};

export default function(state=initialState, action) {
  switch (action.type){
    case ADD_GROUP:
      return{
        ...state,
        createdGroup:[...state.createdGroup,action.payload]
      };
    case ALL_GROUP:
      return{
        ...state,
        allGroup:action.payload
      };
    case MY_GROUPS:
      return{
        ...state,
        myGroups:action.payload
      };
    case RECOMMENDED_GROUPS:
      return{
        ...state,
        recommendedGroups:action.payload
      };

    default:
      return state;
  }
}