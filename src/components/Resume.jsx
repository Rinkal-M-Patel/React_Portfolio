import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Resume = () => {
    const summary = (
        <div className="resume-item pb-0">
          <p>
            <em>
              Innovative Web Designer with five years of experience in website design and development.
              Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results.
            </em>
          </p>
        </div>
      );
    
      const education = [
        {
          course: 'Online Traineeship In Web Development',
          date: '2021 - 2022',
          institution: 'IT Career Switch',
        },
        {
          course: 'Master of Computer Application (MCA)',
          date: '2013 - 2015',
          institution: 'Charotar University of Science And Technology - India',
        },
        {
          course: 'Bachelor of Computer Application (BCA)',
          date: '2010 - 2013',
          institution: 'Veer Narmad South Gujarat University - India',
        },
      ];
    
      const professionalExperience = [
        {
          position: 'Junior Front-End Developer',
          date: '2021 - Dec 2022',
          company: 'Saigate Limited, Wolverhampton (UK)',
          responsibilities: [
            'Developed wireframes, interface mockups, and page prototypes.',
            'Produced graphic user interfaces for desktop browsers, tablets, and mobile devices.',
            'Role included front-end development of fully responsive themes from Photoshop designs.',
            'Developed WordPress Themes, Plugins, and extensions for the WordPress platform.',
           
          ],
        },
        {
          position: 'Web Designer',
          date: '2016 - 2019',
          company: 'Technoheaven Consultancy, India',
          responsibilities: [
            'Enhanced functionality and appearance of websites and repaired functionality issues.',
            'Promoted brand identity by creating company logos using Photoshop and delivering attractive, user-friendly and unique websites.',
            'Translated customer requirements into technical site concepts for bidding and initial planning purposes.',
            
          ],
        },
        {
          position: 'Web Design Intern',
          date: '2015 - 2016',
          company: 'Logica Onfosoft, India',
          responsibilities: [
            'Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.',
            'Followed best practices for web design with Bootstrap.',
            'Troubleshooted and debugged code ensuring compatibility with devices and browsers.',
            'Shadowed developers to learn key details about job duties and tasks.',
            
          ],
        },
      ];
      
  return (
    <>
    <section id="Resume" className='resume'>
    <div className="container">
    <div className="row">
    <h2 className='text-center'>RESUME</h2>
        
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
          <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
      <div className="col-lg-6">
        <h3 className="resume-title">Summary</h3>
        {summary}

        <h3 className="resume-title">Education</h3>
        {education.map((item, index) => (
          <div className="resume-item" key={index}>
            <h4>{item.course}</h4>
            <h5>{item.date}</h5>
            <p><em>{item.institution}</em></p>
          </div>
        ))}
      </div>
      <div className="col-lg-6">
        <h3 className="resume-title">Professional Experience</h3>
        {professionalExperience.map((experience, index) => (
          <div className="resume-item" key={index}>
            <h4>{experience.position}</h4>
            <h5>{experience.date}</h5>
            <p><em>{experience.company}</em></p>
            <ul>
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
    </>
  )
}
