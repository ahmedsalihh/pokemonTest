import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, pathname }) => {
  return (
    <Link to={`${pathname}/${pokemon.name}`} key={pokemon.name}>
      <div className="pokemon-card">
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
          alt={pokemon.name}
        />
        <h4>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h4>
      </div>
    </Link>
  );
};

export default PokemonCard;
