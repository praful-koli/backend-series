import axios from "axios";

const api = axios.create({
    url:'http://localhost:3000/api/auth',
    withCredentials:true
})

export async function register(username, email, password) {
  try {
    const response = await api.post(
      "/register",
      {
        username,
        email,
        password,
      },
    );
    console.log(response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export async function login(username, password) {
  try {
    const response = await axios.post(
      "/login",
      {
        username,
        password,
      },
    );
    console.log(response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
