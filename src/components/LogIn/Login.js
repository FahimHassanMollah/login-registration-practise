import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../redux/actions/AuthAction';

const Login = () => {
    const loginDispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();

    const  login = (e) => {
        e.preventDefault();
        loginDispatch(loginAction({email,password},history))
        
    }
    return (
        <div className="" style={{ textAlign: "center" }}>
            <h1>login </h1>
            <form onSubmit={(e)=>login(e)}>

                <input type="email" name="" placeholder="email" id="" onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" name="" placeholder="password" id="" onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
