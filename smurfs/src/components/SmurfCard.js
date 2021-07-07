import React from 'react';

const SmurfCard = props => {
    return (
        <div className="smurfCard">
            <h3>{props.smurf.name}</h3>
            <p><span className="titles">Age: </span>{props.smurf.age}</p>
            <p><span className="titles">Height: </span>{props.smurf.height}</p>
            <p><span className="titles">Id: </span> {props.smurf.id}</p>

        </div>
    )
}

export default SmurfCard;