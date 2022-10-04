import axios from "axios";


const API_URL = "https://bootcamp-rent-car.herokuapp.com/";

const login = (email, password) => {
  return axios.post (`${API_URL}admin/auth/login`, {
    email,
    password
  })
  .then((res)=>{
    if(res.data.access_token){
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data
  })
};

// const logout = () => {
//   localStorage.removeItem("user")
// }

const authAPI = {
  login,
  // logout,
};

export default authAPI;