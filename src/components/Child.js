import React from 'react'
// import { Greet } from './Greet'

function Child(props) {
    return (
        <div>
            <button onClick = {() => props.greet("abbe salle")}>click!</button>
        </div>
    )
}

export default Child
