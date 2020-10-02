import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Jyoti"
        }
        console.log(" LifeCycleB Constructor")
    }
   static getDerivedStateFromProps(Props, State) { 
       console.log("Lifecycle B getDerivedStateFromProps ")
       return null
        
    }
    componentDidMount(){
        console.log("Lifecycle B mounted")
    }
    shouldComponentUpdate(){
        console.log("LifecycleB  shouldComponentUpdate")
        return true
    }
  
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCyleB getSnapshotBeforeUpdate ")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleB did update")
    }
    
    
    
    render() {
        console.log("Lifecycle B rendered")
        return (
           
            <div>
              Lifecycle B 
            </div>
        )
    }
}
export default LifeCycleB
