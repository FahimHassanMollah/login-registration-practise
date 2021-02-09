import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAction } from '../../redux/actions/AuthAction';

const Home = () => {
    const loggedInUser = useSelector(state => state.authReducer);
    const logoutDispatch = useDispatch();
    const logOut = () => {
        logoutDispatch(logOutAction());
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>this is home !!!!!!!</h1>
            {
                loggedInUser.isLoggedIn ? <><span>{loggedInUser.user.name}</span>  <button onClick={logOut} style={{ textAlign: "center", display: "inline-block" }}>Log out</button> </> : <Link to={'/login'} style={{ textAlign: "center", display: "block" }}>login</Link>
            }

            <br />

        </div>
    )
}

export default Home
