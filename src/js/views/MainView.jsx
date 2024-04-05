import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navbar} from "../component/Navbar.jsx"
import { PeopleComponents } from "../component/PeopleComponents.jsx";

export const MainView = () => {
  return (
    <div>
        <Navbar />
        <PeopleComponents />
    </div>
  )
}
