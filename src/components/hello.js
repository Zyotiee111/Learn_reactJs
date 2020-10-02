import React from 'react';

const Hello = () =>{
    // return (
    //     <div className ='dummyClass'> 
    //      <h1> Hello Jyoti </h1> //Jsx version of hello component
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'} ,
        React.createElement('h1',null,"I am without Jsx"))
}

export default Hello


