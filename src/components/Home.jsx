import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myImage from '../Images/me.png'

function Home() {
  return (
    <>
    
    <section id='Home'>
    <div className="jumbotron rockBackground">
    <div className="jumboCopy">
      <img src={myImage} alt="personalimage" className="masthead-avatar mb-2" />
      <h1 className="display-4">Rinkal Patel</h1>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line bg-white"></div>
        <div className="divider-custom-icon">
        <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="divider-custom-line bg-white"></div>
      </div>
      <p className="lead">FRONT-END DEVELOPER
      </p>
    </div>
  </div>
  </section>
  </>
  );
}

export default Home;
