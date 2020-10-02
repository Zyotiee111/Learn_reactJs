import React from 'react';

function FunctionComp(props){
    return(
        <div> 
          <h2> Hi! I am functional component aka {props.name} </h2> 
        </div>
    )
}
export default FunctionComp;