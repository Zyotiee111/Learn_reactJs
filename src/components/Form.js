import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             option: '',
        }
    }
    handleUsername = (event)=>{
        this.setState({
            username: event.target.value
        }

        )

    }
    handleComments= (event)=>{
        this.setState({
            comment: event.target.value
        }

        )

    }
    handleOptions= (event)=>{
        this.setState({
            option: event.target.value
        }

        )

    }
    handleSubmit = event =>{
        alert(`${this.username} ${this.comment} ${this.option}`)
        event.preventDefault()

    }
    
    render() {
      const {username, comment,option} = this.state
        return (
            <div>
               <h1>  Form component</h1>
                <form onSubmit= {this.handleSubmit}> 
                    <div>
                    <label> Username</label>
                    <input type="text" value={username} onChange= {this.handleUsername}/> 
                    </div>
                    <div>
                    <label> Comments</label>
                    <textarea value={comment} onChange= {this.handleComments}> </textarea> 
                    </div>
                    <div>
                    <label> Topics </label>
                    <select value={option} onChange= {this.handleOptions}> 
                     <option value="React"> React</option>
                     <option value="React Js"> React Js</option>
                     <option value="Vue Js"> Vue Js</option>

                    </select> 
                    </div>
                    <button className="btn btn-success"> Submit</button>
                </form>
            </div>
        )
    }
}

export default Form

