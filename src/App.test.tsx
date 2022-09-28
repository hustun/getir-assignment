import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders product text', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/product/i)).toBeInTheDocument();
});

test('add product button appears', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const addButton = await screen.findAllByText('Add', undefined, {
    timeout: 3000,
  });
  expect(addButton[0]).toBeInTheDocument();
});

test('changes price after adding product', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const addButton = await screen.findAllByTestId('testbutton', undefined, {
    timeout: 3000,
  });

  fireEvent.click(addButton[0]);

  const price = screen.queryByText(/0.00/i);
  expect(price).not.toBeInTheDocument();
});
