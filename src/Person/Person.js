import React from 'react';

/*
    um componente funcional eh reutilizavel e configuravel
    esse tipo de pratica facilita a manutencao de uma aplicacao
    
    a palavra reservada 'children' faz referencia a qualquer elemento
    que esteja entre a abertura e fechamento de uma tag, nesse caso:
    <Person>"Elemento que props.children ira mostrar"</Person>
*/


//Stateless component

const person = (props) => {
    return  (
    <div>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default person;