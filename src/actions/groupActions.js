import axios from "axios";

import {ADD_GROUP,ALL_GROUP,GROUP_INFO, MY_GROUPS, RECOMMENDED_GROUPS} from "./types";


export const addGroup = (account,token) => async dispatch => {
  console.log(account, token);
  let data = await axios.post("http://localhost:5000/group/create",account,{headers:{Authorization:token}} );
  console.log(data.data);
  dispatch({
    type:ADD_GROUP,
    payload:data.data,
  })
};

export const allGroup = () => async dispatch => {
  let data = await axios.get("http://localhost:5000/groups/all");
  console.log(data);
  dispatch({
    type:ALL_GROUP,
    payload:data.data.groups,
  })
};

export const myGroups = (token) => async dispatch => {
  let data = await axios.get("http://localhost:5000/groups/my", {headers:{Authorization:token}} );
  console.log(data);
  dispatch({
    type:MY_GROUPS,
    payload:data.data.groups,
  })
};

export const recommendGroups = (token) => async dispatch => {
  let data = await axios.get("http://localhost:5000/groups/recommend", {headers:{Authorization:token}} );
  console.log(data);
  dispatch({
    type:RECOMMENDED_GROUPS,
    payload:data.data,
  })
};
