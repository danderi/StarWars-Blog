import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "../component/Navbar.jsx"
import {Footer} from "../component/Footer.jsx"
import { SpeciesCard } from "../component/SpeciesCard.jsx";


export const SpeciesCardView = () => {
  return (
    <div style={{backgroundImage: `url(/img/background.jpg)`, backgroundSize: "cover"}}>
        <Navbar />
        <SpeciesCard />
        <Link className="d-flex justify-content-center"to={`/mainView`}>Go back</Link>
        <Footer />
    </div>
  )
}