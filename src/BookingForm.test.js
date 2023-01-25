/* eslint-disable testing-library/no-unnecessary-act */
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/form/BookingForm';

describe('Booking Form', () => {
  afterEach(cleanup);
  test('Renders the Booking Form heading', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const headingElement = screen.getByText('Reservation Details');

    expect(headingElement).toBeInTheDocument();
  });

  test('renders input field with email attributes', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const emailInput = screen.getByTestId('email');

    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });
  test('renders input field with text attributes', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const customerNameInput = screen.getByTestId('customerName');

    expect(customerNameInput).toHaveAttribute('id', 'customerName');
    expect(customerNameInput).toHaveAttribute('type', 'text');
  });

  test('renders input field with date attributes', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const dateInput = screen.getByTestId('date');

    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('type', 'date');
  });
  test('renders select field with time select attributes and at least two options', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const select = screen.getByTestId('time');
    const options = await screen.findAllByTestId('time-option');

    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', 'time');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });
  test('renders select field with guest select attributes and have 10 options', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const select = screen.getByTestId('guests');
    const options = await screen.findAllByTestId('guests-option');

    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', 'guests');
    expect(options.length).toEqual(10);
  });
  test('renders ocassion dropdown field with select attributes and have at least 1 option', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const select = screen.getByTestId('occasion');
    const options = await screen.findAllByTestId('occasion-option');

    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', 'occasion');
    expect(options.length).toBeGreaterThanOrEqual(1);
  });

  test('renders comment field with textbox attributes', () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const commentInput = screen.getByTestId('special-request');

    expect(commentInput).toBeInTheDocument();
    expect(commentInput).toHaveAttribute('id', 'special-request');
    expect(commentInput).toHaveAttribute('name', 'comment');
  });

  test('displays error message and button is disabled when email is empty', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const input = screen.getByTestId('email');
    const button = screen.getByTestId('submit');

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
    });

    const errorMessage = screen.getByTestId('email-error');

    await waitFor(() => {
      expect(errorMessage).toHaveTextContent('Email is Required');
    });
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled');
    });
  });
  test('displays error message and button is disabled when email is invalid', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const input = screen.getByTestId('email');

    act(() => {
      fireEvent.change(input, { target: { value: 'invalid email' } });
      fireEvent.blur(input);
    });

    const button = screen.getByTestId('submit');
    const errorMessage = screen.getByTestId('email-error');

    await waitFor(() => {
      expect(errorMessage).toHaveTextContent('Invalid email address');
    });
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled');
    });
  });
  test('displays error message and button is disabled when customer name is empty', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const input = screen.getByTestId('customerName');
    const button = screen.getByTestId('submit');

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
    });

    const errorMessage = screen.getByTestId('customerName-error');

    await waitFor(() => {
      expect(errorMessage).toHaveTextContent('Customer Name is required');
    });
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled');
    });
  });
  test('displays error message and button is disabled when no date is selected', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const input = screen.getByTestId('date');
    const button = screen.getByTestId('submit');

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
    });

    const errorMessage = screen.getByTestId('date-error');

    await waitFor(() => {
      expect(errorMessage).toHaveTextContent('Choose a date');
    });
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled');
    });
  });
  test('displays error message and button is disabled when no time is selected', async () => {
    render(<BookingForm availableTimes={['17:00', '20:00']} />);

    const input = screen.getByTestId('time');
    const button = screen.getByTestId('submit');

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(input);
    });

    const errorMessage = screen.getByTestId('time-error');

    await waitFor(() => {
      expect(errorMessage).toHaveTextContent('Please select Time');
    });
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled');
    });
  });
  test('submits form when required inputs are valid', async () => {
    const reservationHandler = jest.fn();
    const updateTimesCallback = jest.fn();

    render(<BookingForm availableTimes={['17:00', '20:00']} reservationHandler={reservationHandler} updateTimesCallback={updateTimesCallback} />);

    const customerName = screen.getByTestId('customerName');

    act(() => {
      fireEvent.change(customerName, { target: { value: 'Jane Doe' } });
      fireEvent.blur(customerName);
    });

    const email = screen.getByTestId('email');

    act(() => {
      fireEvent.change(email, { target: { value: 'jane@doe.com' } });
      fireEvent.blur(email);
    });

    const date = screen.getByTestId('date');
    fireEvent.change(date, { target: { value: '2040-01-01' } });
    fireEvent.blur(date);

    const time = screen.getByTestId('time');

    act(() => {
      fireEvent.change(time, { target: { value: '17:00' } });
      fireEvent.blur(time);
    });

    const form = screen.getByTestId('reservation-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(reservationHandler).toHaveBeenCalledWith({
        customerName: 'Jane Doe',
        email: 'jane@doe.com',
        time: '17:00',
        guests: '01',
        comment: '',
        date: '2040-01-01',
        occasion: '',
      });
    });
  });
});
