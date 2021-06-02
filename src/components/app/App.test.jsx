import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  
  it('renders App', async () => {
    render(<App />);
    
    return waitFor(() => {
      const ul = screen.findByRole('list');
      expect(ul).toMatchSnapshot();
    });
  });
});
