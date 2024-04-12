import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";
import StarBackground from "../../img/background.jpg"
import BabyYoda from "../../img/baby_yoda.jpg"

export const Footer = () => {
   
    return (
        <div>
            <footer className="footer mt-auto py-3 text-center" style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
                <p style={{color:"white" }}>
                    May the force be with you...<img style={{height:"80px", width:"65px" }} src={BabyYoda} />
                </p>
                
            </ footer>
        </div>
    )
}