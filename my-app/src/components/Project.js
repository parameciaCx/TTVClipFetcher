import React from 'react'

const Project = (props) =>{
    return(
        <div>
            {props.name}
            <img src={props.info.thumbnail} alt="${props.name} thumbnail"/>
            {props.info.description}
            {props.info.demo}           
        </div>
    )

}

export default Project