import React from 'react'
import data from './data';

const list = ({People , setPeople}) => {
    setPeople (data)
    return (
        <>
        {People.map((person) => {
            const {id, name, age} = People;
            return(
                <div key={id} className="person">
                    <div className="name-age">
                        <h1>{name}</h1>
                        <p>{age}</p>
                    </div>

                </div>
            )
        })}
        </>
    );

};

export default list;