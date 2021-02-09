import * as Action_Type from '../constant';
const authState = {
    isLoggedIn: false,
    user: {
        city: "",
        email: "",
        id: "",
        name: "",
        phone: "",
        state: "",
        street: "",
        zip_code: "",
        access_token: ""
    }
}
const getAuthState = () => {
    const auth=localStorage.getItem('auth');
    try{
        const authObj=JSON.parse(auth);
        if (authObj.user.access_token) {
            return authObj;
        }
        else{
            return authState;
        }
    }catch{
        return authState;
    }
}

export const authReducer = (state = getAuthState(), { type, payload }) => {
    switch (type) {

        case Action_Type.LOGIN_SICCESS:
            const newState = {
                isLoggedIn: true,
                user: {
                    city: payload.user.city,
                    email: payload.user.email,
                    name: payload.user.name,
                    phone: payload.user.phone,
                    state: payload.user.state,
                    street: payload.user.street,
                    zip_code: payload.user.zip_code,
                    access_token: 'Bearer ' + payload.data.access_token,
                }
            }
            localStorage.setItem('auth', JSON.stringify(newState));
            return newState;
        case Action_Type.LOG_OUT:
            localStorage.removeItem('auth');
            return authState;
        default:
            return state
    }
}
