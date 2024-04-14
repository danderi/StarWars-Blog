import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";
import { TiDeleteOutline } from "react-icons/ti";
import StarWarsLogo from "../../img/Star_Wars_Logo.png"
import StarBackground from "../../img/background.jpg"

export const Navbar = () => {

    const { store, actions } = useContext(Context)
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(store.favorites);
    }, [store.favorites]);

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
                <div className="container-fluid me-5 ms-5 pe-5 ps-5">
                <img style={{height:"100px", width:"150px" }} src={StarWarsLogo} />
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites {store.favorites.length}
                        </button >
                        <ul className="dropdown-menu">
                            {favorites.length === 0 ? <li className='text-center'>--EMPTY--</li> : favorites.map((item, index) => (<li className='d-flex justify-content-between pb-2' key={index}><span>{item}</span>
                            <button className="btn btn-danger" onClick={() => { actions.refreshFavorites(item); }}>
                                <TiDeleteOutline />
                            </button></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
