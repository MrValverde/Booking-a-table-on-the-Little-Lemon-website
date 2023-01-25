import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo-long.png';
import Container from './Container';
const Footer = () => {
  const logoStyle = {
    maxWidth: '100%',
  };
  return (
    <footer className='footer'>
      <Container>
        <div className='footer-wrapper'>
          <Link to='/' className='logo'>
            <img src={logo} alt='Little Lemon' style={logoStyle} />
          </Link>
          <div>
            <h3>Navigation</h3>
            <ul className='doormat-links'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/order-online'>Menu</Link>
              </li>
              <li>
                <Link to='/booking'>Reservations</Link>
              </li>
              <li>
                <Link to='/order-online'>Order Online</Link>
              </li>
              <li>
                <Link to='/'>Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              20B Lorem Street <br /> Chicago, US
            </p>
          </div>
          <div>
            <h3>Socials</h3>
            <ul className='social-links'>
              <li>
                <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>

              <li>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a href='https://youtube.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>

              <li>
                <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
