import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navbar} from "../component/Navbar.jsx"
import {Footer} from "../component/Footer.jsx"
import { PeopleCard } from "../component/PeopleCard.jsx";
import StarBackground from "../../img/background.jpg"

export const CardView = () => {
  return (
    <div style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
        <Navbar />
        <PeopleCard />
        <Link className="d-flex justify-content-center"to={`/mainView`}>MainView</Link>
        <Footer />
    </div>
  )
}
