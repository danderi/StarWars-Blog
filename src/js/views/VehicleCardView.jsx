import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "../component/Navbar.jsx"
import {Footer} from "../component/Footer.jsx"
import { VehicleCard } from "../component/VehicleCard.jsx";
import StarBackground from "../../img/background.jpg"

export const VehicleCardView = () => {
  return (
    <div style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
        <Navbar />
        <VehicleCard />
        <Link className="d-flex justify-content-center"to={`/mainView`}>Go back</Link>
        <Footer />
    </div>
  )
}