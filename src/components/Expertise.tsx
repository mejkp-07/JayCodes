import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const webDevLabels = [
    "Java",
    "Spring Boot",
    "Spring MVC",    
    "React.js",
    "JavaScript (ES6+)",
    "JSP",
    "jQuery",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Redux",
    "REST APIs"
];

const backendAndDatabaseLabels = [
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Hibernate",
    "Spring Data JPA",
    "Spring JDBC",
    "Microservices",
    
];

const devopsAndCloudLabels = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Maven",
    "Git",
    "SonarQube",
    "Agile/Scrum"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} size="3x" />
                        <h3>Full Stack Development</h3>
                        <p>
                            Over 3+ years of experience in designing and deploying scalable web applications using Java, Spring Boot, React.js, and PostgreSQL. 
                            Built enterprise systems like WorkForce Management (TimeSync) and iPLM, enhancing efficiency by up to 80%.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Web & Backend:</span>
                            {webDevLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Backend & Database Systems</h3>
                        <p>
                            Proficient in database design, optimization, and query tuning. Delivered 100+ optimized SQL queries, reducing response time by 30%. 
                            Experienced in ORM tools like Hibernate and Spring Data JPA for reliable and scalable data handling.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Databases & ORM:</span>
                            {backendAndDatabaseLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <h3>DevOps & Cloud Deployment</h3>
                        <p>
                            Hands-on experience with AWS services, Docker containerization. 
                            Deployed and maintained applications on cloud platforms, ensuring high availability and scalability.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Cloud & DevOps:</span>
                            {devopsAndCloudLabels.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;