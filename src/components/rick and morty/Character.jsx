/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeProvider';

const Character = ({ image, name, species }) => {
  const theme = useTheme();
  return (<li style={ theme ? { backgroundColor:'white', color: 'black' } : { backgroundColor:'black', color:'white' }}>
    <figure>
      <img src={image} alt={name}/>
      <figcaption>{name} - {species}</figcaption>
    </figure>
  </li>);
};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
export default Character;
