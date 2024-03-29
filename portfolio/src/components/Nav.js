import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import '../component-styles/Nav.css';

function Nav() {
    const [activeLink, setActiveLink] = useState('home');

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleNavLinkClick('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleNavLinkClick('about')}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">KevinMcDonald.dev</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleNavLinkClick('home')}>Home</a>
                    
                        <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleNavLinkClick('about')}>About</a>
            
                        <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;