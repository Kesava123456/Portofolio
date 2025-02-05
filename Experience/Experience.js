import React from 'react';
import './Experience.css';
import Navbar from '../Navbar/index.js';

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className="experience-container">
        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="date-box">OCT 2024 - Present</div>
            </div>
            <div className="timeline-right">
              <div className="role-title">QA Engineer</div>
              <div className="role-subtitle">Ramco Systems, Chennai Adyar - Fulltime</div>
              <div className="role-description">
                <ul>
                  <li>
                    I'm working on the Payce and RVW products, both of which are integral to Payroll management solutions,
                    focusing on delivering high-quality payroll solutions, and working on different statutories.
                    Identified and resolved critical issues, and tracked defects using Jira, rtrack, rtask.
                  </li>
                  <li>
                    Designed and executed test cases for payroll processing modules, ensuring compliance with statutory
                    regulations and organizational requirements.
                  </li>
                  <li>
                    Collaborated with product teams to ensure alignment with ever-evolving statutory regulations and
                    organizational policies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;