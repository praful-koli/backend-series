import axios from "axios"

const api = axios.create({
  baseURL:"http://localhost:3000/api/auth",
  withCredentials:true
})


export async function login(username , password) {
    try {
      const response  = await api.post("/login",{
        username,
        password
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
}

export async function register(username, email, password) { 
    try {
       const response = await api.post("/register" ,{
          username,
          email,
          password
       })
       console.log(response.data)
       return response.data
    } catch (error) {
      console.log(error)
    }
}


export async function userInfo() {
     try {
        const response = await api.get("/get-me")
        return response.data
     } catch (error) {
      console.log(error)
     }
}