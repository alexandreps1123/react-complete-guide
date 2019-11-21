import React from 'react';

// componente button reutilizavel
// nesse caso, foi usado uma arrow function

const button = (props) => {
    return (
    <div>
        <button>{props.name}</button>
    </div>
    )
};

export default button;