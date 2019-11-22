/*
    exemplo de uso de Hooks, comparar esse codigo com o do App.js
*/

import React, { useState } from 'react';
//import './App.css' from './src./';
import Person from '/home/mctic/react-complete-guide/src/Person/Person.js';

/*
    agora nao estamos mais trabalhando com classe mas sim uma funcao normal, uma arrow function
    e como agora eh uma funcao nao usamos mais a palavra-chave 'this' para fazer referencia
    aos elementos da classe. com o uso de Hooks temos uma arrow function que retorna JSX
    importamos useState que eh um tipo de Hook, e ele eh schamado dentro da funcao como uma funcao
*/

const hook = props =>    {
/*
    nesse caso temos dois elemetos: persons e otherState
    e retorna um valor com estado e uma funcao para atualiza-lo

    quando estamos usando React Hooks nao tem problema declararmos uma
    funcao dentro da funcao principal, que eh o caso da switchNameHandler

    a funcao de retorno do useState ela substitui o estado antigo
    por exemplo, se eu nao passar o segundo estado "otherState"
    para a funcao "switchNameHandler" quando esta funcao for chamado 
    nao existira mais o estado "otherState"
*/

    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Alexandre', age: 27},
            { name: 'Cancer', age: 27},
            { name: 'Kenny', age: 77}
        ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

 

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Caos', age: 27},
                { name: 'Cancer', age: 27},
                { name: 'Kanny', age: 77}
            ],
            otherState: personsState.otherState
        });
    }

    return (
            <div className="App">
                <h1>Hi, I'm a React Hook</h1>
                <p>This is really working!</p>
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}    
                />
                <Person 
                    name={personsState.persons[1].name} 
                    age={personsState.persons[1].age}>
                        My Hobbies: Racing
                </Person>
                <Person 
                name={personsState.persons[2].name} 
                age={personsState.persons[2].age}
                />
            </div>
    );
}

export default hook;