import React, {Component} from 'react';

class ClassComp extends Component {
    render() {
      const {name,heroname} = this.props
      //const{state1,state2}= this.state
        return (
        // <div>
        //   <h1> Hello World I am class componnent.</h1>
        // </div>
        <div> 
          {/* <h1> Hello This is functional Component aka {this.props.name} aka {this.props.heroname}</h1> */}
          <h1> Hello World this is {name} aka {heroname} eg:destructuring </h1>
        </div>
        )
    }
}
export default ClassComp
