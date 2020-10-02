import React, { Component } from 'react'
import ChildComp from './ChildComp'


class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ParentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
    
    render() {
        return (
                <div>
                    <ChildComp greetHandler = {this.greetParent}/>
                </div>
        )
    }
}

export default ParentComp
