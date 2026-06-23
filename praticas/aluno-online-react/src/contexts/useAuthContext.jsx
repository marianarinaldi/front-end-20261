import { useContext } from "react";
import { AuthContext } from "./AuthContextData";

function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
