import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello"
        }
        this.Handler = this.Handler.bind(this)
    }
    Handler = () =>{
        this.setState({
            message: "Byebye"
        })
    }
    // Handler(){
    //     this.setState(
    //         {
    //             message: "Goodbye"
    //         }
    //     )
    //     console.log(this)
    // }
    
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                {/* <button onClick= { this.Handler.bind(this)}> Click Me </button>
                <button onClick= {() => this.Handler.bind()}> Click Me </button> */}
                <button onClick= { this.Handler}> Click Me </button>

                
            </div>
        )
    }
}

export default EventBind
