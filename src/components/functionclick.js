import React,{Component} from 'react';

function FunClick() {
    function clickHandler() {
        console.log('Button Clicked')
        
    }
    return(
        <div>
            <button className= "btn btn-success btn-lg" onClick = {clickHandler}> 
                Function Click
            </button>
        </div>
    )
    
}
export default FunClick