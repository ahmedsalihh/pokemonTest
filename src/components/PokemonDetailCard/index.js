import React from 'react';

const PokemonDetailCard = ({ pokemon }) => {
  return (
    <div className="detail-card">
      <a className="close" href="/pokemon">
        X
      </a>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
        alt={`${pokemon.name}`}
      />
      <h4>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h4>
      <div className="specs">
        <label>ID: </label>
        <span>{pokemon.id}</span>
        <div className="clr" />
        <label>Type: </label>
        <span>{pokemon.types[0].type.name}</span>
        <br />
        <label>Height: </label>
        <span>{pokemon.height}</span>
        <br />
        <label>Habilities</label>
        <ul>
          {pokemon.abilities.map(item => (
            <li key={item.ability.name}>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
