import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  // atributos da classe
  state = {
    persons: [
      { id: 'asd', name: 'Alexandre', age: 27},
      { id: 'asdf', name: 'Cancer', age: 27},
      { id: 'asdgas', name: 'Kenny', age: 77}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alex', age: 29},
        { name: event.target.value, age: 27},
        { name: 'Kenna', age: 70}
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () =>  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  //  Render eh um metodo
  render() {
    /*
      estilizacao do botao em javascript
      pode-se usar esse modo ou dentro do arquivo .css, 
      mas a estilizacao no arquivo .css fara com que as alteracoes sejam globais. 
      Isso significa que todos os botoes, se houber mais de um, serao alterados.
      Esse tipo de estilizacao em javascript eh recomendado apenas no caso em que
      se queira uma mudanca em um unico elemento
    */

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    /*
      esse modo eh mais elegante para se trabalhar
      ao inves de colocar o condicional dentro do return
      como havia sido mostrado no exemplo anterior
      desse modo, mantem o return mais organizado
    */

    let persons = null;

    if ( this.state.showPersons)  {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    
  
  // NAO USAR ESTE TIPO DE CODIGO!!! 

  /*
    createElement() eh metodo que recebe 3 argumentos
    o primeiro argumento eh o elemento que queremos aplicar render(), pode ser um elemento HTML ou um componente
    o segundo argumento eh o de configuracao, pode-se passar um objeto javascript
    o terceiro argumento eh qualquer quantidade de children ('herança(?)')
  */

  /*
    return React.createElement('div', null, 'h1', 'Hi, vamos ver o que rola');
  */

  /*
    Queremos que o h1 seja um elemento que seja renderizado, então
    return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, vamos ver o que rola'))
  */
  }
}

export default App;
