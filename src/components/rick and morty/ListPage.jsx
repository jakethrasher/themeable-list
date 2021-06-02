import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/apiUtils';
import Character from './Character';

const ListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);

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
    <>
      <h1>Rick and Morty Characters</h1>
      <button onClick={() => handlePageChange(-1)}>&#8592;</button>
      <span>{page}/{total}</span>
      <button onClick={() => handlePageChange(1)}>&#8594;</button>
      <ul aria-label="characters">
        {characters.map(char => (
          <Character {...char} key={char.id}/>
        ))}
      </ul>
    </>
  );
};
export default ListPage;
