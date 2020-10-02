import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Button is  Clicked")
    }
    render() {
        return (
           <div>
            <button className= "btn btn-success btn-lg" onClick = {this.clickHandler}> 
                CLass Click
              </button>
           </div>
        )
    }
}

export default  ClassClick;

