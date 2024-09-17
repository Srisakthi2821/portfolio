import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaHome, FaBiohazard, FaLaptopCode} from 'react-icons/fa'
import {MdFileDownload} from 'react-icons/md'
import {PiCertificateFill} from 'react-icons/pi'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar_portfolio" id="navcontainer">
        <div className="navbar navbar-expand-lg navbar-dark navbar-custom bg-light fixed-top p-3">
          <Link to="/">
            <a className="navbar-brand" href="#srihome">
              <img
                className="logo_navbar"
                src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1696783065/srisakthi_logo_wfnnea.png"
                alt="Logo"
              />
            </a>
          </Link>
          <Link to="/">
            <a className="navbar-brand portfolio_head_nav" href="#srihome">
              <span className="post_leter">P</span>ORTFOLIO
              <span className="dash_port">|</span>
              <span className="name_s">S</span>ri
              <span className="name_s">S</span>akthi
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link to="/" className="linkTag">
                <p className="nav-item nav-link">
                  Home <FaHome />
                </p>
              </Link>
              <Link to="/mydesigns" className="linkTag">
                <p className="nav-item nav-link">
                  Own Designs <FaBiohazard />
                </p>
              </Link>
              <Link to="/myprojects" className="linkTag">
                <p className="nav-item nav-link">
                  Projects
                  <FaLaptopCode />
                </p>
              </Link>
              <Link to="/mycertificates" className="linkTag">
                <p className="nav-item nav-link">
                  Certifications
                  <PiCertificateFill />
                </p>
              </Link>
              <p
                href="https://drive.google.com/file/d/1wv3vFWj7oE_7HQ8roZURPJLpFhvg588T/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-warning button_cv"
                  download="https://drive.google.com/file/d/1wv3vFWj7oE_7HQ8roZURPJLpFhvg588T/view?usp=sharing"
                >
                  Download CV
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
