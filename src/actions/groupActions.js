import axios from "axios";

import {ADD_GROUP} from "./types";

export const addGroup = account => async dispatch => {
  console.log(account);
  let data = await axios.post("http://localhost:5000/group/create", account);
  console.log(data);
  dispatch({
    type:ADD_GROUP,
    payload:data,
  })
};