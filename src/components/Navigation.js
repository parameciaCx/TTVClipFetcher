import React from 'react'
import {Link} from 'react-router-dom'
import "./App.css"

const Navigation = () => {

    return(
            <div data-test="navBar" style={{textAlign:"center"}}>

                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
            </div>
        )
  
}

export default Navigation