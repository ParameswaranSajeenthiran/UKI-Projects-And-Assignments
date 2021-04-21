import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.basicToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("username", JSON.stringify(response.data.username));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    axios.post(API_URL + "logout", {});
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }
  createMain(name,motto,numMembers,bankAcc){
  return axios.post("http://localhost:8080/com",{
  name,
  motto,
  numMembers,
  bankAcc,
  subCom:[],
  coverPhoto:[]
  },{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
  }
  getJoinedSubCom(username,mainCom){
  return axios.get("http://localhost:8080/com/userSubCom?user="+username+"&mainCom="+mainCom,{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
  }
    createSub(id,name,motto,numMem,bankAcc){
  return axios.post("http://localhost:8080/com/"+id,{
  name,
  motto,
  numMem,
  bankAcc
  },{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
