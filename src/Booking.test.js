/* eslint-disable testing-library/no-unnecessary-act */
import { MemoryRouter } from 'react-router-dom';
import { act, cleanup, screen, render, fireEvent, waitFor } from '@testing-library/react';
import Booking from './pages/Booking';

describe('Booking', () => {
  afterEach(cleanup);

  test('initializeTimes returns non-empty array', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
    });

    await screen.findByTestId('time');

    const availableTimes = screen.getByTestId('time');
    await waitFor(() => {
      expect(availableTimes.options.length).toBeGreaterThan(0);
    });
  });

  test('updateTimes sends payload.times that updates reducer state', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
    });
    const dateInput = screen.getByTestId('date');

    act(() => {
      fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
      fireEvent.blur(dateInput);
    });

    await screen.findByTestId('time');

    const availableTimes = screen.getByTestId('time');
    await waitFor(() => {
      expect(availableTimes.options.length).toBeGreaterThan(0);
    });
    await waitFor(() => {
      expect(availableTimes.options[0].value).toBe('');
    });
    await waitFor(() => {
      expect(availableTimes.options[1].value).toBe('17:00');
    });
  });
});
