import React, { useState, useEffect, useContext } from "react";
import { useFormAction } from "react-router-dom";
import { Context } from "../store/appContext";


export const PeopleComponents = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.loadPeopleData();
    }
        , [])
    console.log(store.people)
    return (
        <div>
            <h1>People</h1>
            <div className="overflow-x-auto" style={{ maxWidth: "100%", maxHeight: "50vh" }}>
                <div className="people-scroll-container" style={{ maxWidth: "100%", maxHeight: "100%", overflowX: "auto" }}>
                    <div className="row flex-nowrap" style={{ margin: "0" }}>
                        {store.people.map((person, index) => (
                            <div key={index} className="col-4" style={{ minWidth: "12rem", padding: "0 4px" }}>
                                <div className="card" style={{ width: "75%" }}>
                                    <img src="..." className="card-img-top" alt="..." style={{ height: "60%" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{person}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
