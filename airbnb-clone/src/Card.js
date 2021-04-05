import React from 'react';
import "./Card.css";

const Card = ({src,title,description}) => {
    return (
        <div>
            <div className="card">
                <img src={src} alt="pic"/>
                <div className="card__info">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
