
import javaUdemy from '../assets/images/javaUdemy.png';
import intel from '../assets/images/intel.png';
import infosys from '../assets/images/infosys.png';
import internshala from '../assets/images/webInternshala.png';
import '../assets/styles/Project.scss';

function Certification() {
    return(
    <div className="projects-container" id="certification">
        <h1>Certifications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.udemy.com/share/101v6K3@4c8spi8zIeW1BwU3t11iFsC0ZJt09BYcpjcpqVff04tte_Q3BKiPlo7uwnwAeLEpIg==/" target="_blank" rel="noreferrer"><img src={javaUdemy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.udemy.com/share/101v6K3@4c8spi8zIeW1BwU3t11iFsC0ZJt09BYcpjcpqVff04tte_Q3BKiPlo7uwnwAeLEpIg==/" target="_blank" rel="noreferrer"><h2>Java Spring Framework 6 with Spring Boot 3 - Udemy(2025) </h2></a>
                
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1VU2WKRlRKt-BUkGqpv93rBT4F4Q6BOI0/view" target="_blank" rel="noreferrer"><img src={internshala} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1VU2WKRlRKt-BUkGqpv93rBT4F4Q6BOI0/view" target="_blank" rel="noreferrer"><h2>Web Development Certification - Internshala(2019) </h2></a>
                
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1OVvTX07ArMBTDlIogAMBHdi2AslKPYEq/view" target="_blank" rel="noreferrer"><img src={intel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1OVvTX07ArMBTDlIogAMBHdi2AslKPYEq/view" target="_blank" rel="noreferrer"><h2>Internship - Intel Technology India Pvt. Ltd.(2023) </h2></a>
                
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1m0lXpISd0XKD-U86MusQv7GxwpAgJ1HF/view" target="_blank" rel="noreferrer"><img src={infosys} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1m0lXpISd0XKD-U86MusQv7GxwpAgJ1HF/view" target="_blank" rel="noreferrer"><h2>Internship - Infosys Pvt. Ltd.(2021)  </h2></a>
                
            </div>            
            
        </div>
    </div>
    );
}

export default Certification;