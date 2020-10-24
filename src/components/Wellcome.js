import React from 'react';

class Wellcome extends React.Component {

    render(){
        return (
        <div>
            <h1>Hello {this.props.name}</h1>
            <p>Hi, Guys what are you waiting for?</p>
            <button>Press me!</button>
        </div>
            );
    }
}

export default Wellcome;