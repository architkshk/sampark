import axios from "axios";

import {SIGNUP,LOGIN,LOGOUT} from "./types";

export const Signup = account => async dispatch => {
  console.log(account);
  let data = await axios.post("http://localhost:5000/auth/signup", account);
  console.log(data);
  dispatch({
    type:SIGNUP,
    payload:data.data,
  })
};

export const logIn = account => async dispatch => {
  let data = await axios.post("http://localhost:5000/auth/signin", account);
  dispatch({
    type:LOGIN,
    payload:data.data,
  })
};

 export const logOut =() => async dispatch => {
  dispatch({
     type:LOGOUT,
   })
 };

