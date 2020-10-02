import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ["Bruce","Clerk","Jack"]
    // const nameList =  names.map(name => <h2> {name}</h2>)
    // return <div> {nameList}</div>

    // return (
    //     <div>
    //         {/* <h2> {names[0]}</h2>
    //         <h2> {names[1]}</h2>
    //         <h2> {names[2]}</h2> */}
    //         {/* {
    //             names.map(name => <h2> {name}</h2>)
    //         } */}
            
    //     </div>
    // )
   const person = [
       {
           name: "Jyoti",
           age: "20",
           skill: "All rounder",
       },
       {
        name: "Jyotie",
        age: "20",
        skill: "All rounder",
      },
      {
        name: "Jyotibista",
        age: "20",
        skill: "All rounder",
        }
   ]

const personList = person.map(person => <Person key= {person.name} person ={person} />)
return <div> {personList}</div>
}

export default NameList

