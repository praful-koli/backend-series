
import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
export function useAuth() {
   const {user, loading , loginHandle} = useContext(AuthContext)
  return {user, loading , loginHandle}
}