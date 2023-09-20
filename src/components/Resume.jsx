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
          course: 'one',
          date: '2021',
          institution: 'IT Career',
        },
        {
          course: 'two',
          date: '2015',
          institution: 'India',
        },
        {
          course: 'three',
          date: '2010 - 2013',
          institution: 'India',
        },
      ];
    
      const professionalExperience = [
        {
          position: 'Front-End Developer',
          date: '2021',
          company: ' (UK)',
          responsibilities: [
            'Developed wireframes, interface mockups, and page prototypes.',
           
           
          ],
        },
        {
          position: 'Web Designer',
          date: '111',
          company: ' India',
          responsibilities: [
            'Enhanced functionality and appearance of websites and repaired functionality issues.',
            
          ],
        },
        {
          position: 'Web Design',
          date: '200',
          company: 'India',
          responsibilities: [
            'Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.',
           
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
