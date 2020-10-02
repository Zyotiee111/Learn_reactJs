import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
       return this.state.isLoggedIn && <div> Welcome Jyoti</div>
        // if (this.state.isLoggedIn){
        //     return (
        //         <div> Welcome Jyoti</div>
        //     )
        // } else{
        //     return(
        //         <div> Welcome Guest</div> 
        //     )
        // }

    //     let message
    //     if (this.state.isLoggedIn){
    //         message = <div> Welcome Jyoti</div>
    //     }else{
    //         message = <div> Welcome Guest</div> 
    //     }
    // return <div> {message}</div>

        // return (
        //     <div>
        //        <div> Welcome Jyoti </div>
        //        <div> Welcome Guest </div>
        //     </div>
        // )
    
        // return(
        //     this.state.isLoggedIn ?
        //     <div> Welcome Jyoti </div>:
        //     <div> Welcome Guest </div>

        // )
    }
}

export default UserGreeting
