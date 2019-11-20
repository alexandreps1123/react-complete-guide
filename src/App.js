import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  //  Render is a method
  render() {
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Alexandre" age="27"/>
        <Person name="Cancer" age="27"/>
        <Person name="Ranna" age="23"/>
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
