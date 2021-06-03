import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => setTheme((prevState) => !prevState);

  const state = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={state} >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useChangeTheme = () => {
  const { changeTheme } = useContext(ThemeContext);
  return changeTheme;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
