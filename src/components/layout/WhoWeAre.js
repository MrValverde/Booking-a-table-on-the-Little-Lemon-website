import chefOne from '../../assets/chef-3975835_1280.jpg';
import chefTwo from '../../assets/chef-5993951_1280.jpg';
import GImageOne from '../../assets/dinner-601576_640.jpg';
import GImageTwo from '../../assets/restaurant-2623071_640.jpg';
import GImageThree from '../../assets/chicken-4343402_640.jpg';
import GImageFour from '../../assets/drinks-2578446_640.jpg';
import GImageFive from '../../assets/service-1303313_640.jpg';
import GImageSix from '../../assets/restaurant-1284351_640.jpg';

import Container from './Container';
const WhoWeAre = () => {
  return (
    <section id='about'>
      <Container>
        <div className='who-we-are-content'>
          <p className='lead-text'>
            Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
          <img src={chefOne} alt='' style={{ borderRadius: '20px' }} />
        </div>
        <div className='who-we-are-content'>
          <img src={chefTwo} alt='' style={{ borderRadius: '20px' }} />
          <p className='lead-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
          <h2 style={{ marginBottom: '30px', textTransform: 'uppercase' }}>Gallery</h2>
          <div className='gallery-images'>
            <img src={GImageOne} alt='' />
            <img src={GImageTwo} alt='' />
            <img src={GImageThree} alt='' />
            <img src={GImageFour} alt='' />
            <img src={GImageFive} alt='' />
            <img src={GImageSix} alt='' />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default WhoWeAre;
