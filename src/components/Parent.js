import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    greet(name) {
        alert("hello"+name)
    }

    render() {
        return (
            <div>
                <Child greet={this.greet} />                
            </div>
        )
    }
}

export default Parent
