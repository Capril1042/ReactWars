import React from 'react';
import './CharContainer.css';


const CharContainer= ({data}) => {
    return(
        <div className="char-continer">
                <h2> <b>{data.name}</b></h2>
                <div className="char-info">
                <h4>Born in :{data.birth_year}</h4>
                <h4>Gender: {data.gender}</h4>
                <h4>Height: {data.height}</h4>
                <h4> Mass: {data.mass}</h4>
                <h4>Eye-color: {data.eye_color}</h4>
                <h4> Hair-color: {data.hair_color}</h4>
                <h4> Skin-color: {data.skin_color}</h4>
        
            </div>
        
        </div>
    );
}

export default CharContainer;