import { useContext } from "react";
import { getMe, login, register } from "../services/auth.api";
import { AuthContext } from "../authContext.js";


export const useAuth = () => {

  const {user, setUser ,loading , setLoading} = useContext(AuthContext)

    const handleLogin = async (username, password) => {
        setLoading(true)
        try {
            const response = await login(username , password)
            setUser(response.userData)
            return response
        } catch (error) {
            console.error(error.message)
        } finally {
           setLoading(false)
        }
    }


    const handleRegister = async (username ,email , password) => {
        setLoading(true)
        try {
            const response = await register(username , email , password)
            setUser(response.userData)
            return response.userData
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }


   const handleGetMe =  async () => {
        setLoading(true)
        try {
            const response = await getMe()
            setUser(response.userData)
            return response.userData
        } catch (error) {
             console.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {user , loading , handleLogin , handleRegister , handleGetMe}
}