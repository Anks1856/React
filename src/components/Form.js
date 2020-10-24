import React, { Component } from 'react'
import './Main.css'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             message : '',
             topic : 'react'

        }
    }
   
    handleChangeN = event =>{
        this.setState({
            name : event.target.value,
            // message : event.target.value
        })
        
    }
    handleChangeM = event =>{
        this.setState({
            // name : event.target.value,
            message : event.target.value
        })
        
    }

    handleChangeS = event =>{
        this.setState({
            // name : event.target.value,
            topic : event.target.value
            //message : event.target.value
        })
        
    }

    handleChangeF = event =>{
        alert(`${this.state.name} ${this.state.message} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <div className="don">
                <h3>All about HTML form</h3>
                <form onSubmit={this.handleChangeF}>
                    <div>
                        <label>Your Name:- </label>
                        <input type="text" value={this.state.name} onChange={this.handleChangeN} ></input>
                    </div>
                    <div>
                        <label>Your Message:- </label>
                        <input type="text" value={this.state.message} onChange={this.handleChangeM} ></input>
                    </div>
                    <div>
                        <label>Topic :- </label>
                        <select value={this.state.topic} onChange={this.handleChangeS}>
                            <option value='react'>React</option>
                            <option value='node'>Node</option>
                            <option value='js'>JavaScript</option>
                        </select>
                    </div>
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
