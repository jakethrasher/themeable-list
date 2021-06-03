/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { useTheme } from '../context/ThemeProvider';

const CharacterList = ({ characters }) => {
  const theme = useTheme();
  return (
    <ul aria-label="characters" style={{
      backgroundColor: theme ? 'white' : 'black',
      color: theme ? 'black' : 'white'
    }}>
      {characters.map(char => (
        <Character {...char} key={char.id}/>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })).isRequired
};

export default CharacterList;
