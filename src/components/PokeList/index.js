import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Header from '../Header';

const PokeList = () => {
  let [pokemons, setPokemons] = useState([]);
  let [generation] = useState(1);

  useEffect(() => {
    function getPokemons() {
      Axios.get(`https://pokeapi.co/api/v2/generation/${generation}`)
        .then(res => {
          setPokemons(res.data.pokemon_species);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getPokemons();
  }, []);

  return (
    <div id='pokelist'>
      <Header />
      <div className='container'>
        <div className='list-title'>
          <h2>Generation {generation}</h2>
          <h4>{pokemons.length} pokemons</h4>
        </div>
        {pokemons.map(poke => (
          <Link to={`/pokemon/${poke.name}`} key={poke.name}>
            <div className='pokemon-card'>
              <img
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${poke.name}.gif`}
                alt={poke.name}
              />
              <h4>{poke.name[0].toUpperCase() + poke.name.slice(1)}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokeList;
