import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        console.log(email,password);
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
