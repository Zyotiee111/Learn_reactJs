import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message :' Welcome visitor in the State Of The React'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Glad You CLicked! Bye For Now :/'
        })
    }


    render() {
        return (
            <div>
            <h1> {this.state.message}</h1>
            <button className= "btn btn-success btn-lg" onClick ={ () => this.changeMessage()}> Click Here </button>
            </div>
        )
    
         
    }
}
export default Message
