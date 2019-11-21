import React from 'react';

// Os dois exemplos 'Hello' sao equivalentes em React
// classe ES6
class HelloES6 extends React.Component  {
    render()    {
        return <h1>Hello, {this.props.name}!</h1>
    }
}

export default HelloES6;