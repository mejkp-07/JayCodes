import React from "react";
import shopverseImage from '../assets/images/shopverse.png'; // You'll need to add this image
import hiresphereImage from '../assets/images/hiresphere.png'; // You'll need to add this image
import javaUdemy from '../assets/images/javaUdemy.png';
import internshala from '../assets/images/webInternshala.png';
import weatherApp from '../assets/images/weatherApp.png';
import keeperApp from '../assets/images/keeperApp.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <a href="https://github.com/mejkp-07/ECommerce_Using-SpringBoot_SprindDataJPA_REST_React" target="_blank" rel="noreferrer">
            <div className="project">
                <img src={javaUdemy} className="zoom" alt="Shopverse E-commerce Platform" width="100%"/>
                <h2>Shopverse</h2>
                <div className="tech-stack">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">SpringBoot</span>
                    <span className="tech-tag">Spring Data JPA</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">REST APIs</span>
                </div>
                <p>
                Developed a full-stack e-commerce solution with secure authentication, product management, and order tracking<br/>
                    
                </p>
            </div>
            </a>
            <a href="https://github.com/mejkp-07/JobPortal_Using-SpringBoot_SprindDataJPA_REST_React" target="_blank" rel="noreferrer">
            <div className="project">
                <img src={internshala} className="zoom" alt="HireSphere Job Portal" width="100%"/>
                <h2>HireSphere</h2>
                <div className="tech-stack">
                    <span className="tech-tag">SpringBoot</span>
                    <span className="tech-tag">Spring Data JPA</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML5/CSS3</span>
                    <span className="tech-tag">Bootstrap</span>
                </div>
                <p>
                    Built a job posting and application system with end-to-end CRUD operations<br/>
                    
                </p>
            </div>
            </a>
            <a href="https://codesandbox.io/p/sandbox/myweatherapp-4g4n9f" target="_blank" rel="noreferrer">
            <div className="project">
                <img src={weatherApp} className="zoom" alt="Weather Forecasting App" width="100%"/>
                <h2>Weather Forecasting App</h2>
                <div className="tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">APIs</span>
                    <span className="tech-tag">PostgreSQL</span>
                </div>
                
            </div>
            </a>
            <a href="https://codesandbox.io/p/sandbox/keeper-part-3-starting-forked-edwrsn" target="_blank" rel="noreferrer">
            <div className="project">
                <img src={keeperApp} className="zoom" alt="Note-Keeping App" width="100%"/>
                <h2>Note-Keeping App</h2>
                <div className="tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">APIs</span>
                    <span className="tech-tag">PostgreSQL</span>
                </div>
                
            </div>
            </a>
        </div>
        
        
    </div>
    );
}

export default Project;