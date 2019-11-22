import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import HelloJS from './Hello/HelloJS.js';
import HelloES6 from './Hello/HelloES6.js';
import Button from './Button/Button.js';

class App extends Component {
  // atributos da classe
  state = {
    persons: [
      { name: 'Alexandre', age: 27},
      { name: 'Cancer', age: 27},
      { name: 'Kenny', age: 77}
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // NAO FACA ISSO: this.state.persons[0].name = 'Caraca';
    this.setState({
      persons: [
        { name: 'erdnaxelA', age: 27},
        { name: 'Cancer', age: 27},
        { name: 'Kenna', age: 70}
      ],
      otherState: 'some other value'
    });
  }

  //  Render eh um metodo
  render() {
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

        <HelloJS name="Alexandre" />
        <HelloES6 name="Kenny" age="77" />
        <Button name="Name!!!!"/>
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
    A linha 22 interpreta o h1 como texto, nao como um elemento HTML
  */
 
  // Queremos que o h1 seja um elemento que seja renderizado, então
  //    return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, vamos ver o que rola'))
  }
}

export default App;
