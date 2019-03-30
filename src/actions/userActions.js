import axios from "axios";

import {SIGNUP,LOGIN} from "./type";

export const Signup = account => async dispatch => {
  console.log(account);
  let data = await axios.post("http://localhost:5000/auth/signup", account);
  dispatch({
    type:SIGNUP,
    payload:data,
  })
};

export const logIn = account => async dispatch => {
  let data =await axios.post("http://localhost:5000/auth/signin", account);
  dispatch({
    type:LOGIN,
    payload:data,
  })
};
