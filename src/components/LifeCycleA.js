import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Jyoti"
        }
        console.log(" LifeCycleA Constructor")
    }
   static getDerivedStateFromProps(Props, State) { 
       console.log("Lifecycle A getDerivedStateFromProps ")
       return null
        
    }
    componentDidMount(){
        console.log("Lifecycle A mounted")
    }
    shouldComponentUpdate(){
        console.log("LifecycleA  shouldComponentUpdate")
        return true
    }
  
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCyleA getSnapshotBeforeUpdate ")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA did update")
    }
    changeState = () =>{
        this.setState({
            name: 'Jyoti Bista'
        })
    }
    
    
    
    render() {
        console.log("Lifecycle A rendered")
        return (
           
            <div>
              Lifecycle A 
              <button onClick={this.changeState}> Change State</button>
              <LifeCycleB/>  
            </div>
        )
    }
}
export default LifeCycleA
