import axios from "axios";
import {tokenService} from './tokenService'
export const authService = {
    async login({email,password}) {
      return  axios.post('http://localhost:8080/auth', {
        email: email,
        password: password
      })
      .then(async (response) =>{
        console.log(response)
        const body = response.data
        console.log(body.token)
        tokenService.save(body.token);
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    async signup({username,email,password}) {
        return  axios.post('http://localhost:8080/users/register', {
          name: username,
          email: email,
          password: password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
}