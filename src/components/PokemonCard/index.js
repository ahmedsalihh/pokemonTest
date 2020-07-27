import React from 'react';
import { Link } from 'react-router-dom';

import { getFirstLetterCapitalized } from '../../utils';

const PokemonCard = ({ pokemon, pathname }) => {
  return (
    <Link to={`${pathname}/${pokemon.name}`} key={pokemon.name}>
      <div className="pokemon-card">
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
          alt={pokemon.name}
        />
        <h4>{getFirstLetterCapitalized(pokemon.name)}</h4>
      </div>
    </Link>
  );
};

export default PokemonCard;
