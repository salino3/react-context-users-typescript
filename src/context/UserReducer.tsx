import { GET_USERS, GET_PROFILE } from "./Types";

export default function Action(state: any, action: any) {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
        TF: true
      };
    default:
      return state;
  }
}