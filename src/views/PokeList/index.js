import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Header from '../../components/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import PokeListInfo from '../../components/PokeListInfo';
import Loading from '../../components/Loading';

const PokeList = ({ pathname }) => {
  const [pokemons, setPokemons] = useState([]);
  const [generation] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getPokemons() {
      Axios.get(`https://pokeapi.co/api/v2/generation/${generation}`).then(res => {
        setPokemons(res.data.pokemon_species);
        setIsLoading(false);
      });
    }
    getPokemons();
  }, []);

  return (
    <div className="container">
      <Header />
      <PokeListInfo count={pokemons.length} generation={generation} />
      {isLoading ? (
        <Loading />
      ) : (
        pokemons.map(poke => <PokemonCard pathname={pathname} pokemon={poke} />)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pathname: state.router.location.pathname,
  };
};

export default connect(mapStateToProps, {})(PokeList);
