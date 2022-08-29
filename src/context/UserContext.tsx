import { createContext } from "react";
import { All, All2, All3 } from "./Interfaces";

export interface myUserContextProps {
  users: All2;
  selectedUser: All3;
  TF: false,
  state: All;
  getUsers: () => void;
  getProfile: (id: any) => void;
}


 const myUserContext = createContext<myUserContextProps>({} as myUserContextProps);

export default myUserContext;
