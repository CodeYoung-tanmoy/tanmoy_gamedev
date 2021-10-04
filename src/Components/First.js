import React from 'react'

function First(props){
    return  (
        <div>
        <h2>My name is {props.username}</h2>
        <h2>My School is {props.school}</h2>
        </div>
    )
    
}

export default First