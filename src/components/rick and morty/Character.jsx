import React from 'react';
import PropTypes from 'prop-types';
const Character = ({ image, name, species }) => (
  <li>
    <figure>
      <img src={image} alt={name}/>
      <figcaption>{name} - {species}</figcaption>
    </figure>
  </li>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
export default Character;
