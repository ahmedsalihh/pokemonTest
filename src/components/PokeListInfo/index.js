import React from 'react';

const PokeListInfo = ({ count, generation }) => {
  return (
    <div className="list-title" data-test="component-poke-list-info">
      <h2>Generation {generation}</h2>
      <h4>{count} pokemons</h4>
    </div>
  );
};

export default PokeListInfo;
