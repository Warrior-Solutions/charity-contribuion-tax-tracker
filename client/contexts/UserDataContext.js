import { createContext } from "react";

export const UserDataContext = createContext({
  userData: undefined,
  updateUserData: (userData) => { }
});
