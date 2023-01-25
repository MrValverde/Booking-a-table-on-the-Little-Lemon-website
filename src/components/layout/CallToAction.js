import Button from '../ui/Button';
import Container from './Container';
import FullBleedBackground from './FullBleedBackground';

const CallToAction = ({ primaryText, secondaryText, description, cta, ctaText, ctaURL, image }) => {
  const containerStyle = {
    marginBottom: '100px',
  };

  return (
    <section id='hero'>
      <FullBleedBackground background='var(--primary-color)'>
        <Container customize={true} customStyles={containerStyle}>
          <div className='cta-wrapper'>
            <div className='cta-text-wrapper'>
              <div className='cta-header'>
                <h1 className='display-title'>{primaryText}</h1>
                <h2 className='subtitle'>{secondaryText}</h2>
              </div>
              <p className='cta-desc lead-text'>{description}</p>
              {cta && <Button btnText={ctaText} path={ctaURL} />}
            </div>
            <div className='cta-image'>
              <img src={image} alt='' />
            </div>
          </div>
        </Container>
      </FullBleedBackground>
    </section>
  );
};
export default CallToAction;
