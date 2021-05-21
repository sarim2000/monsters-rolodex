import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`http://robohash.org/${props.monsters.id}?set=set2`} alt="monster" />
            <h1>{props.monsters.name}</h1>
            <p>props.monsters.email </p>
        </div>
    )
}