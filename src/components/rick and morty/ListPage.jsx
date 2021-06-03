/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/apiUtils';
import { useTheme } from '../context/ThemeProvider';
import CharacterList from './CharacterList';

const ListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const theme = useTheme();

  useEffect(() => {
    getCharacters(page)
      .then(res => {
        setCharacters(res.results);
        setTotal(res.info.pages);
      });
  }, [page]);

  const handlePageChange = (num) => {
    setPage(prevPage => prevPage + num);
  };
  
  return (
    <div style={ theme ? { backgroundColor:'white', color: 'black' } : { backgroundColor:'black', color:'white' }}>
      <h1 style={{ margin:'0px' }}>Rick and Morty Characters</h1>
      <button onClick={() => handlePageChange(-1)}>&#8592;</button>
      <span>{page}/{total}</span>
      <button onClick={() => handlePageChange(1)}>&#8594;</button>
      <CharacterList characters={characters} />
    </div>
  );
};
export default ListPage;
