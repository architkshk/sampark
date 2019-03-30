import axios from "axios";

import {ADD_GROUP} from "./types";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

export const addGroup = (account,token) => async dispatch => {
  console.log(account, token);
  let data = await axios.post("http://localhost:5000/group/create",account,{headers:{Authorization:token}} );
  console.log(data.data);
  dispatch({
    type:ADD_GROUP,
    payload:data.data,
  })
};
