import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Header from '../Header';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';

const PokeList = ({ pathname, handleClick }) => {
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
    <div id="pokelist">
      <Header />
      <div className="container">
        <div className="list-title">
          <h2>Generation {generation}</h2>
          <h4>{pokemons.length} pokemons</h4>
        </div>
        {pokemons.map(poke => (
          <Link to={`${pathname}/${poke.name}`} key={poke.name}>
            <div
              className="pokemon-card"
              // onClick={() => handleClick(pathname, poke.name)}
              // key={poke.name}
            >
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

const mapStateToProps = state => {
  return {
    pathname: state.router.location.pathname,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (pathname, name) => dispatch(push(`${pathname}/${name}`)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
