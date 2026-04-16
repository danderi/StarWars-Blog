import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";


export const Footer = () => {

    return (
        <div>
            <footer className="footer mt-auto py-3 text-center" style={{ backgroundImage: `url(/img/background.jpg)`, backgroundSize: "cover" }}>
                <p style={{ color: "white" }}>
                    May the force be with you...<img style={{ height: "80px", width: "65px" }} src={"/img/baby_yoda.jpg"} />
                </p>
            </ footer>
        </div>
    )
}