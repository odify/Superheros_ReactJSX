import React from 'react';

const SuperHero = (props) => {

    console.log(props.urlImage)
    return (

        <article>
            <p>{props.id}</p>
            <img src={props.urlImage} />
            <h2>{props.name}</h2>
            <h5>{props.email}</h5>
        </article>
    );
}

export default SuperHero;