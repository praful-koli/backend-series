
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
export function useAuth() {
   const {user, loading , loginHandle} = useContext(AuthContext)
  return {user, loading , loginHandle}
}