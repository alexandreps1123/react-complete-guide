import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'


class App extends Component {
  // atributos da classe
  state = {
    persons: [
      { name: 'Alexandre', age: 27},
      { name: 'Cancer', age: 27},
      { name: 'Kenny', age: 77}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // NAO FACA ISSO: this.state.persons[0].name = 'Caraca';
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Cancer', age: 27},
        { name: 'Kenna', age: 70}
      ]
    } )
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
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Alexandre!!')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Alex!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
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
