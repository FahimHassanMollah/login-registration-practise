import axios from 'axios';
// import { LOGIN_SICCESS } from '../constant';
import * as Action_Type from '../constant';


export const loginAction = (userInformation, history) => (dispatch) => {
    axios.post('http://test.backend.divasworld.com.bd/api/customer/login', userInformation, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            //Authorization: 'Bearer '+token // if you use token
        }
    })
        .then(res => {
            console.log(userInformation);
            if (res.data.user) {
                dispatch({
                    type: Action_Type.LOGIN_SICCESS,
                    payload: res.data
                })
                history.push('/');
            }
            else {

            }
        })
        .catch(err => {

        })

}
export const logOutAction = () => (dispatch) => {
    dispatch({
        type:Action_Type.LOG_OUT
    })

}



