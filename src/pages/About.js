import HeroImage from '../assets/restaurant-449952_1280.jpg';
import CallToAction from '../components/layout/CallToAction';
import WhoWeAre from '../components/layout/WhoWeAre';
const Home = () => {
  return (
    <>
      <CallToAction primaryText='Little Lemon' secondaryText='Who are we?' description='' image={HeroImage} />
      <WhoWeAre />
    </>
  );
};
export default Home;
