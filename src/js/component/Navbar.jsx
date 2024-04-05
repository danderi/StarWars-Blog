import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">STAR WARS</a>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </nav>
        </div>
    )
}
