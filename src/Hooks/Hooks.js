/*
    exemplo de uso de Hooks, comparar esse codigo com o do App.js
*/

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


// agora nao eh mais uma classe mas sim uma funcao normal, uma arrow function
// e como agora eh uma funcao nao usamos mais a palavra-chave 'this' para fazer refe

const app = props =>    {
    // nesse caso temos dois argumento: persons e otherState
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Alexandre', age: 27},
            { name: 'Cancer', age: 27},
            { name: 'Kenny', age: 77}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({

        });
    }

    return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person
                    name={state.persons[0].name}
                    age={state.persons[0].age}    
                />
                <Person 
                    name={state.persons[1].name} 
                    age={state.persons[1].age}>
                        My Hobbies: Racing
                </Person>
                <Person 
                name={state.persons[2].name} 
                age={state.persons[2].age}
                />
            </div>
    );
}

export default app;