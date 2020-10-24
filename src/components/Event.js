import React from 'react'

function Event() {

    function eventhandler(){
        console.log('btn clicked');
    }
    return (
        <div>
            <button onClick={eventhandler}>Click</button>
        </div>
    )
}

export default Event
