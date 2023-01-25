import { useCallback, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api.js';
import CallToAction from '../components/layout/CallToAction';
import HeroImage from '../assets/book-table.jpg';
import BookingForm from '../components/form/BookingForm';

const ACTIONS = {
  UPDATE_TIMES: 'update_times',
  INITAILIZE_TIMES: 'initialize_times',
};

const initialState = { times: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TIMES:
      return { ...state, times: action.payload.times };
    case ACTIONS.INITAILIZE_TIMES:
      return { ...state, times: action.payload.times };
    default:
      return state;
  }
};

const Booking = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const updateTimes = (date) => {
    const selectedDate = new Date(date);
    const response = fetchAPI(selectedDate);
    const times = response;

    dispatch({ type: ACTIONS.UPDATE_TIMES, payload: { times: times } });
  };

  const updateTimesCallback = useCallback(updateTimes, []);

  const submitForm = (formData) => {
    const response = submitAPI(formData);

    if (response) {
      navigate('/confirmation');
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    function initializeTimes() {
      const dateToday = new Date();

      const response = fetchAPI(dateToday);
      const times = response;

      dispatch({ type: ACTIONS.INITAILIZE_TIMES, payload: { times: times } });
    }
    initializeTimes();
  }, []);
  return (
    <>
      <CallToAction primaryText='Reserve a Table' secondaryText='Dine with us!' description='' image={HeroImage} />
      <BookingForm availableTimes={state.times} reservationHandler={submitForm} updateTimesCallback={updateTimesCallback} />
    </>
  );
};
export default Booking;
