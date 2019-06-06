import axios from "axios";

import {GET_NOTIFICATION,ADD_NOTIFICATION} from "./types";

export const addNotification = Data => async dispatch => {
  await axios.post("http://localhost:5000/notification/create", Data);
  console.log("notification added");
  dispatch({
    type:ADD_NOTIFICATION,
  })
};

export const getNotification = () => async dispatch => {
  let data = await axios.get("http://localhost:5000/auth/signin//notification/my");
  console.log("data");
  dispatch({
    type:GET_NOTIFICATION,
    payload:data.data,
  })
};
