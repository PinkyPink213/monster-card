import React from 'react';

export default function Card({monster}) {
    const { name, email,website, id } = monster;
    return (
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
            <h2 >{name}</h2>
            <p>{website}</p>
            <p>{email}</p>
        </div>
    )
}


