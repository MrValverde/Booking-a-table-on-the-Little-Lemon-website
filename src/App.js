import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home';
import BookingPage from './pages/Booking';
import ConfirmationPage from './pages/ConfirmedBooking';
import OrderPage from './pages/OrderOnline';
import AboutPage from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
          <Route path='/order-online' element={<OrderPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Layout>
    </ScrollToTop>
  );
}

export default App;
