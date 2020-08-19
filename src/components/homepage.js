import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
// import { Link } from "react-router-dom";
import myImag from '../images/my_img.jpg'

class HomePage extends Component{
    render(){
        return(
            // <div style={{width: '100%', margin: 'auto'}}>
            <div >
                <Grid className="home-grid">
                 <Cell col={12}>
                    <img 
                    src={myImag}                    
                    alt='avatar-image'
                    className='avatar-img' />
                    <div className='banner-text'>
                    <h2 style={{color: 'white'}} > Mohammad ALshoker </h2>
                    <h3 style={{color: 'white'}} > Front-End Web Developer </h3>
                    <hr/>
                    <p> HTML/CSS | JavaScript | React.js | Node.js | MongoDB | MySQL   </p>

                    <div className="social-links" > 
                          {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/mohammad-alshoker-365376b8/" rel="noopener noreferrer" target="_blank" > 
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>

                          {/* GitHub */}
                          <a href="https://github.com/myshuker?tab=repositories" rel="noopener noreferrer" target="_blank" > 
                            <i className="fa fa-github"  aria-hidden="true" />
                        </a>

                          {/* FreeCodeCamp */}
                          <a href="https://www.freecodecamp.org/myshuker" rel="noopener noreferrer" target="_blank" > 
                            <i className="fa fa-free-code-camp"  aria-hidden="true" />
                        </a>

                          {/* instagram */}
                          <a href="https://www.instagram.com/myshuker/?hl=en" rel="noopener noreferrer" target="_blank" > 
                            <i className="fa fa-instagram"  aria-hidden="true" />
                        </a>

                          {/* codepen */}
                          <a href="https://codepen.io/myshuker" rel="noopener noreferrer" target="_blank" > 
                            <i className="fa fa-codepen"  aria-hidden="true" />
                        </a>                         

                    </div>
                            <p><small>&copy; 	Copyright &copy; {" "}
                            {(new Date().getFullYear())} {" "}
                            All rights reserved </small></p>                       
                    </div>
                 </Cell>
                </Grid>
            </div>
        )
    }
}

export default HomePage;