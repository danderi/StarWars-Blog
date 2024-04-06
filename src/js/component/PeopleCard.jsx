import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleCard = () => {
    const { uid } = useParams(); // Extraer el UID de la URL
    const { store } = useContext(Context);

    // Encontrar la persona correspondiente al UID proporcionado
    const person = store.peopleDetails.find(person => person.result.uid === uid);

    // Verificar si la persona fue encontrada
    if (!person) {
        return <div>No person found for UID {uid}</div>;
    }

    return (
        <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{person.result.properties.name}</h5>
                <p className="card-text">Gender: {person.result.properties.gender}</p>
                <p className="card-text">Height: {person.result.properties.height}</p>
                <p className="card-text">Birth Year: {person.result.properties.birth_year}</p>
                {/* Otros detalles de la persona */}
            </div>
        </div>
    );
};


