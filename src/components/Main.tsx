import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import '../assets/styles/Main.scss';
import photo from '../assets/images/photo.jpg'
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a title="github" href="https://github.com/mejkp-07" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a title="linkedin" href="https://www.linkedin.com/in/jay-kumar-79aa421a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a title="leetcode" href="https://leetcode.com/u/mejkp_07/" target="_blank" rel="noreferrer"><CodeIcon/></a>
            <a title="CodeSandbox" href="https://codesandbox.io/u/mejkp-07" target="_blank" rel="noreferrer"><TerminalIcon/></a>
          </div>
          <h1>Jay Kumar</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a title="github" href="https://github.com/mejkp-07" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a title="linkedin" href="https://www.linkedin.com/in/jay-kumar-79aa421a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a title="leetcode" href="https://leetcode.com/u/mejkp_07/" target="_blank" rel="noreferrer"><CodeIcon/></a>
            <a title="CodeSandbox" href="https://codesandbox.io/u/mejkp-07" target="_blank" rel="noreferrer"><TerminalIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;