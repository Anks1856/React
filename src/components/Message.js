import React from 'react';

class Message extends React.Component {

    constructor(){
        super();
        this.state = {
            message:'wellcome Anks!'
        }
    }

    changeM() {
         this.setState({
             message: 'thank you for comming!'
         })
    }

    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <p>Hi, Guys what are you waiting for?</p> */}
            <button onClick={() => this.changeM()}>Press me!</button>
        </div>
            );
    }
}

export default Message;