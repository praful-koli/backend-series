import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/post",
    withCredentials:true
})




export const getFeed = async (navigate) => {
  try {
    const response = await api.get('/feed');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Status:", error.response.status);

      if (error.response.status === 401) {
        // navigate to login page
        navigate('/login');
      }
    } else {
      console.log("Network or server error:", error.message);
    }
  }
};
