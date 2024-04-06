import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navbar} from "../component/Navbar.jsx"
import { PeopleCard } from "../component/PeopleCard.jsx";


export const CardView = () => {
  return (
    <div>
        <Navbar />
        <PeopleCard />
        <Link to={`/mainView`}>MainView</Link>
    </div>
  )
}
