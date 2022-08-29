import {  useReducer, useState } from "react";
import UserReducer from "./UserReducer";
import myUserContext from "./UserContext";
import axios from "axios";
import { All } from "./Interfaces";


interface Props {
  children: JSX.Element | JSX.Element[];
}


const UserState = ({ children }: Props) => {

  const initialState: All = {
    users: [],
    selectedUser: [],
    TF: false
  };
  //
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get(`https://reqres.in/api/users`);
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
    console.log(res.data.data);
  };

  const getProfile = async (id: any) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    //  console.log(res.data.data)
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    
    });
  };

  return (
    <myUserContext.Provider
      value={{
        state,
        users: state.users,
        selectedUser: state.selectedUser,
        TF: state.TF,
        getUsers,
        getProfile,
      }}
    >
      {children}
    </myUserContext.Provider>
  );
};

export default UserState;
