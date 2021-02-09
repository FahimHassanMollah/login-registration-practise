import axios from 'axios';
import * as Action_Type from '../constant';
// export const loginAction = (payload) => ({
//     type: Action_Type.LOGIN_SICCESS,
//     payload
// })

export const loginAction = (userInformation) => (dispatch)=> {
    axios.post('http://test.backend.divasworld.com.bd/api/customer/login',userInformation,{
        headers:{
          Accept: 'application/json',
         'Content-Type': 'application/json',
          //Authorization: 'Bearer '+token // if you use token
      }
    })
    .then(res=>{
        console.log(userInformation);
        console.log(res);
    })
    .catch(err=>{

    })
//     fetch("https://test.com/api/login", {
//     method: 'post',
//     body: formData
// })
// .then(res => res.json())
// .then(
// (result) => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })
}



