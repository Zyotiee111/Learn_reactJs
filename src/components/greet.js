import React from 'react';

// const Greet = props =>{
//     return (
//     <div>
//     <h1> Hello {props.name} aka {props.heroname}</h1>
//     {props.children}
         
//     </div>
//     )
// } 
// const Greet = ({name, heroname}) =>{
//     return(
//     <div>
//         <h1> Hello {name} aka {heroname} Destructuring Method 1</h1>
//     </div>
//     )
// }

const Greet = props =>{
    const {name,heroname} =props 
    return(
        <div>
            <h1>
                Hello {name} aka {heroname} this is 2nd Method
            </h1>
        </div>
    )
}

export default Greet

