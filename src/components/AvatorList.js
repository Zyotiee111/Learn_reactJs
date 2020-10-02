import React from 'react';

const AvatorList = (props) =>{

  
    return(
        <div className="avatar col-md-2">
        <img src={`https:joeschmoe.io/api/v1/${props.name}`}/>
          <h2> {props.name}</h2>
            <p> {props.work} </p>
        </div>
    )
}
export default AvatorList;