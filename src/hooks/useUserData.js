import { useContext } from "react";
import UserDataContext from "../context/UserDataProvider";

const useUserData = () => {
  return useContext(UserDataContext);
}

export default useUserData;