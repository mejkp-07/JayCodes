import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptopCode, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div>
      <div className="items-container">
        
        {/* Experience Section */}
        <div className="section-container" id="workExperience">
          <h1>Work Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Sep 2023 – Present"
              iconStyle={{ background: '#5000ca', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBuilding} />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Software Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Centre for Development of Advance Computing (C-DAC)</h4>
              <p>
                • Developed WorkForce Management System (TimeSync) adopted by 200+ employees<br/>
                • Built 10+ interactive dashboards, boosting management efficiency by 80%<br/>
                • Optimized database schema with 100+ SQL queries, reducing response time by 30%<br/>
                • Delivered project management platform (iPLM) automating workflows by 60%<br/>
                • Resolved 60+ critical bugs and delivered 5+ major feature enhancements
              </p>
              <div className="tech-tags">
                <span className="tag">Spring Framework</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">JSP</span>
                <span className="tag">JavaScript</span>
                <span className="tag">jQuery</span>
                <span className="tag">Bootstrap</span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Jul 2022 – Jun 2023"
              iconStyle={{ background: '#0071c5', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faLaptopCode} />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer (Intern)</h3>
              <h4 className="vertical-timeline-element-subtitle">Intel</h4>
              <p>
                • Contributed to web-based image processing platform processing 5,000+ images<br/>
                • Designed responsive UI for chatbot application achieving 90% user satisfaction<br/>
                • Collaborated in Agile environment with cross-functional teams<br/>
                • Applied best practices in code optimization, debugging, and Git version control
              </p>
              <div className="tech-tags">
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Java</span>
                <span className="tag">Agile</span>
                <span className="tag">Git</span>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        {/* Education Section */}
        <div className="section-container" style={{ marginTop: '60px' }} id="education">
          <h1>Education</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#f5f5f5', color: 'rgb(39, 40, 34)' }}
              date="2021 – 2023"
              iconStyle={{ background: '#28a745', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">M.Tech in Computer Science</h3>
              <h4 className="vertical-timeline-element-subtitle">National Institute of Technology, Goa</h4>
              <p>GPA: 8.67/10</p>
              <p><strong>Relevant Coursework:</strong> Advanced Algorithms, Mathematical Foundations of CS, Linear Algebra, Advanced Database Systems</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#f5f5f5', color: 'rgb(39, 40, 34)' }}
              date="2017 – 2021"
              iconStyle={{ background: '#28a745', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">B.Tech in Information Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Jabalpur Engineering College</h4>
              <p>Percentage: 78.9%</p>
              <p><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object Oriented Programming</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

      </div>
    </div>
  );
}

export default Timeline;