import BrandLogo from '../assets/logo.png'
import './Header.css'

export function HeaderLogoNav() {
  return (
    <div className="nav-bar" >
      <div className="brand-name" >
        <img className='brand-logo' src={BrandLogo} alt="" />
        <p className='brand-name-text' >Flux Grow</p>
      </div>
      <div className="links" >
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="buttons" >
        <button>Log in</button>
        <button>Get Started</button>
      </div>
    </div>
  )
}