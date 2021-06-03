/* eslint-disable quotes */
/* eslint-disable max-len */
export const getCharacters = async (page) => { 
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const { results, info } = await res.json();
  return { results, info };
};
