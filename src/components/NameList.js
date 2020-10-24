
import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id:1,
            name:"anks",
            skill:"js"
        },
        {
            id:2,
            name:"ankur",
            skill:"python"
        },
        {
            id:3,
            name:"ankush",
            skill:"Node Js"
        }
    ];

    const personList =  persons.map(person => <Person key={person.name} person={person} />)
    return <div>{personList}</div>

}

export default NameList
