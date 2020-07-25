import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const App = () => {
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    function getPokemons() {
      Axios.get('https://pokeapi.co/api/v2/generation/1')
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
    <div className='container'>
      {pokemons.map(poke => (
        <div className='block'>
          <img
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${poke.name}.gif`}
            alt={poke.name}
          />
          <h4>{poke.name}</h4>
        </div>
      ))}
    </div>
  );
};
export default App;
