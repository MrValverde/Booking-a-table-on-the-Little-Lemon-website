import GreekSalad from '../../assets/greek-salad-sm.jpg';
import Bruschetta from '../../assets/bruschetta-sm.jpg';
import Burger from '../../assets/burger-sm.jpg';
import LemonDessert from '../../assets/lemon-dessert.jpg';
import Pasta from '../../assets/pasta-sm.jpg';
import GrilledFish from '../../assets/grilled-fish-sm.jpg';
import Salmon from '../../assets/food-712665_1280.jpg';
import Pizza from '../../assets/pizza-3010062_1280.jpg';
import Cupcake from '../../assets/dessert-352475_1280.jpg';
import Pancakes from '../../assets/pancakes-2291908_1280.jpg';
import GrilledMeat from '../../assets/meat-123668_1280.jpg';
import Steak from '../../assets/asparagus-2169305_1280.jpg';
import SpecialsCard from '../cards/SpecialsCard';
import Container from './Container';

const Menu = () => {
  const menuList = [
    {
      name: 'Spicy Salmon Teriyaki',
      image: Salmon,
      price: 8.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Asparagus Steak',
      image: Steak,
      price: 25.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Greek Salad',
      image: GreekSalad,
      price: 12.99,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      link: '#',
    },
    {
      name: 'Bruschetta',
      image: Bruschetta,
      price: 5.99,
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      link: '#',
    },
    {
      name: 'Pizza',
      image: Pizza,
      price: 6.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Pancakes',
      image: Pancakes,
      price: 5.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Lemon Dessert',
      image: LemonDessert,
      price: 5.99,
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      link: '#',
    },
    {
      name: 'Pasta',
      image: Pasta,
      price: 18.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Grilled Meat',
      image: GrilledMeat,
      price: 13.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Cupcakes',
      image: Cupcake,
      price: 8.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
    {
      name: 'Grilled Fish',
      image: GrilledFish,
      price: 6.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },

    {
      name: 'Burger',
      image: Burger,
      price: 8.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.',
      link: '#',
    },
  ];

  return (
    <section id='menu'>
      <Container>
        <ul className='specials-list'>
          {menuList.map((meal, idx) => (
            <SpecialsCard meal={meal} key={idx} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default Menu;
