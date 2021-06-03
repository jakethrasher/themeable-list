import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ThemeProvider from '../context/ThemeProvider';

describe('App component', () => {
  
  it('renders App', async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    
    
    const ul = await screen.findByRole('list', { name:'characters' });
    expect(ul).toMatchSnapshot();
  
  });
});
