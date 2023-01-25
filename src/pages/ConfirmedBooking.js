import SuccessIcon from '../assets/mdi_success-circle.png';
import CallToAction from '../components/layout/CallToAction';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import HeroImage from '../assets/chef-5993951_1280.jpg';

const ConfirmedBooking = () => {
  return (
    <>
      <CallToAction primaryText='Your Reservation' secondaryText='Hope to see you soon!' description='' image={HeroImage} />
      <section>
        <Container customize={true} customStyles={{ textAlign: 'center', marginBottom: '80px' }}>
          <div>
            <img src={SuccessIcon} alt='' />
            <p className='lead-text' style={{ margin: '20px 0 30px' }}>
              Reservation Successful
            </p>
            <Button btnText='Visit Home' path='/' />
          </div>
        </Container>
      </section>
    </>
  );
};
export default ConfirmedBooking;
