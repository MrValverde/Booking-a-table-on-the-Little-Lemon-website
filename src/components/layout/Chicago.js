import chefOne from '../../assets/chef-3975835_1280.jpg';
import chefTwo from '../../assets/chef-5993951_1280.jpg';
import Container from './Container';
const Chicago = () => {
  return (
    <section id='about'>
      <Container>
        <div className='about-header'>
          <h2 className='display-title'>Little Lemon</h2>
          <h3 className='subtitle'>Chicago</h3>
        </div>
        <div className='about-content'>
          <p className='about-desc'>
            Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
          <div className='about-images'>
            <img src={chefOne} alt='' />
            <img src={chefTwo} alt='' />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Chicago;
