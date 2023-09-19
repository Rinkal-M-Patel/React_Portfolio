import React  from 'react';
import { Link,useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  const scrollToSection = (sectionId) => {
    // Use the `history` object to navigate to the desired route
    history.push(sectionId);

    // Scroll to the section smoothly using JavaScript
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg header-top fixed-top">
      <div className="container">
      <a className="navbar-brand logo" href="/">Rinkal</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('#Home')}>
                  Home
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('#About')}>
                  About
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('#Resume')}>
                  Resume
                </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('#Projects')}>
                  Projects
                </Link>
                
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => scrollToSection('#Contact')}>
                  Contact
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    </>
  );
};

export default Navbar;
