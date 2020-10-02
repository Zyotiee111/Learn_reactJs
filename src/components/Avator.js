import React, { Component } from 'react'
import './Avator.css'
import AvatorList from './AvatorList';


class Avator extends Component{
       constructor() {
           super();
       
           this.state = {
                message: "Welcome To The Avator World"
           }
       }
       handleClick = () =>{
           this.setState({
               message: "You Have Subscribed The Avator World"
           })
       }
       
        render(){
            const avatorarr = [
                {
                    id:1,
                    name:"Jyoti",
                    work: "Data Scientist"
                },
                {
                    id:2,
                    name:"Kiran ",
                    work: "Data Engineer"
                },
                {
                    id:1,
                    name:"Prabhat",
                    work: "Web Developer"
                },
                {
                    id:1,
                    name:"Simran",
                    work: "Designer"
                },
        
            ]
           const avatarcard= avatorarr.map((avatarcard,i) =>{
                return <AvatorList key={i} id = {avatorarr[i].id} 
                                   name = {avatorarr[i].name} 
                                   work= {avatorarr[i].work}/>
            })
            return (
                <div className="mainpage">
                    <h1> {this.state.message} </h1>
                    {avatarcard}
                    <br></br>
                    <button className= "btn" onClick= {this.handleClick}> Subscribe </button>
                    
                </div>
            )

        }
}
   
export default Avator;
