import React from 'react';

const CharContainer= ({data}) => {
    return(
        <div className="char-container">
            <div className="container-header">
                <h3> <b>{data.name}</b></h3>
            </div>
                <div className="char-info">
                    <div className="char-info-section">
                        <h4> <span>Gender:</span> {data.gender}</h4>
                        <h4><span>Height:</span> {data.height}</h4>
                        <h4> <span>Mass:</span> {data.mass}</h4>
                    </div>
                        <div className="char-info-section">
                            <h4><span>Eye-color:</span> {data.eye_color}</h4>
                            <h4><span> Hair-color:</span> {data.hair_color}</h4>
                            <h4> <span>Skin-color:</span> {data.skin_color}</h4>
                            <h4><span>Born in:</span> {data.birth_year}</h4>
                        </div>
                </div>
                <div className="container-footer">
                    <h4><span>Appears in {data.films.length} of 7 Star Wars Films.</span></h4>
                </div>
            </div>
    );
}

export default CharContainer;