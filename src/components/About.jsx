import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const About = () => {

 
  const pdfFileUrl = '/my_cv.pdf'; 

  // Function to handle the CV download
  const handleDownloadCV = () => {
    // Use JavaScript to simulate a click on a hidden anchor tag to trigger the download
    const link = document.createElement('a');
    link.href = pdfFileUrl;
    link.download = 'my_cv.pdf'; // Specify the desired file name
    link.click();
  };
  return (
    <>
    <section id="About">
    <div className="container">
      <div className="row ">
      <h2 className='text-center'>ABOUT</h2>
        
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
            
            </div>
            <div className="divider-custom-line"></div>
          </div>
        <div className="col-sm-12">
          <div>
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="skill-mf">
                <h5 className="title-left">About me</h5>
                  <span>HTML</span> <span className="pull-right">85%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span>CSS3</span> <span className="pull-right">75%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span>PHP</span> <span className="pull-right">50%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-left">About me</h5>
                  </div>
                  <p className="lead">
                   
            Innovative Web Designer with 5 years of experience in website design and Development. Demonstrated talent for front-end web development 
            to optimize online presence. Seasoned expert in HTML, CSS, BOOTSTRAP, PHP, jQuery and JavaScript Programming languages to drive design, build,
             test and deployment efforts for custom website solution. Experienced working with teams to produce impactful, leading-edge websites that engage 
             customers and deliver business results. Also, personal project webpage design using REACT and TAILWIND CSS. Well-versed in design standards and 
             user preferences.
          
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}
