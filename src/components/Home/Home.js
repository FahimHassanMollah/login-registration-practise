import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div >
            <h1 style={{textAlign:"center"}}>this is home !!!!!!!</h1>
            <Link to={'/login'} style={{textAlign:"center",display:"block"}}>login</Link>
        </div>
    )
}

export default Home
