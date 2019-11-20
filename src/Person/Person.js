import React from 'react';

// um componente funcional eh reutilizavel e configuravel
// esse tipo de pratica facilita a manutencao de uma aplicacao

const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old!</p>
};

export default person;