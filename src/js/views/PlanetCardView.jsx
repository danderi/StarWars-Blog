import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "../component/Navbar.jsx"
import {Footer} from "../component/Footer.jsx"
import { PlanetCard } from "../component/PlanetCard.jsx";
import StarBackground from "../../img/background.jpg"

export const PlanetCardView = () => {
  return (
    <div style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
        <Navbar />
        <PlanetCard />
        <Link className="d-flex justify-content-center"to={`/mainView`}>Go back</Link>
        <Footer />
    </div>
  )
}