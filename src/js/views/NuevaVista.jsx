import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const NuevaVista = () => {
    const [names, setNames] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.swapi.tech/api/people');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                const namesArray = jsonData.results.map(person => person.name);
                setNames(namesArray);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <div>
                <h1>Error de carga de datos</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Nombres de personas:</h1>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

