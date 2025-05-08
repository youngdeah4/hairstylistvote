import Path from './assets/img/Path 36.png';
import "./animate.css"
import "./bootstrap.min.css"
import "./magnific-popup.css"
import "./owl.carousel.min.css"
import "./font-awesome.min.css"
import "./iconmoon.css"
import "./hover-min.css"
import "./style.css"
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa6';
import Logo from './assets/img/logo.png';


function App() {

  return (
    <>
      <div className="header-style-01">
        <nav className="navbar navbar-area style-01 style-04 navbar-expand-lg nav-style-02">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo-wrapper">
                <a href="index.html" className="logo">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bizcoxx_main_menu"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
              <ul className="navbar-nav political">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">.</a>
                </li>

              </ul>
            </div>
            <div className="nav-right-content style-01">
              <div className="btn-wrapper">
                <Link to="/instagram" className="boxed-btn political-btn">Hlasujte nyní <FaArrowRight className='inline' /> </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="header-area style-02 h-screen style-04 header-sanatory header-bg-02">
        <div className="container nav-container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="header-inner style-02 political text-center">
                <div className="subtitle">
                  <img src={Path} className="title-shape" alt="Path" />
                  "Kadeřník"
                </div>
                <h1 className="title style-02">Hlasujte pro svého oblíbeného kadeřníka</h1>
                <div className="btn-wrapper desktop-center">
                  <Link to="/instagram" className="boxed-btn btn-sanatory style-01 text-uppercase"> Hlasujte nyní <FaArrowRight className='inline' />  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
