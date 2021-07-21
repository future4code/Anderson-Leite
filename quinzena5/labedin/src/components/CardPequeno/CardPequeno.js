import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <h4>{ props.info }</h4>
        </div>
    )
}

export default CardPequeno;