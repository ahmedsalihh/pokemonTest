import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Header from '../../components/Header';
import { connect } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import PokeListInfo from '../../components/PokeListInfo';
import Loading from '../../components/Loading';
import PokeSearch from '../../components/PokeSearch';

const PokeList = ({ pathname }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [generation] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    Axios.get(`https://pokeapi.co/api/v2/generation/${generation}`).then(res => {
      const allPokemons = res.data.pokemon_species;
      setPokemons(allPokemons);
      setFilteredPokemons(allPokemons);
      setIsLoading(false);
    });
  };

  const handleSearch = searchText => {
    setFilteredPokemons(
      pokemons.filter(f => f.name.toLowerCase().includes(searchText.toLowerCase())),
    );
  };

  const handleClear = () => {
    setFilteredPokemons(pokemons);
  };

  return (
    <div className="container">
      <Header />
      <PokeListInfo count={pokemons.length} generation={generation} />
      <PokeSearch handleSearch={handleSearch} handleClear={handleClear} />
      {isLoading ? (
        <Loading />
      ) : (
        filteredPokemons.map(poke => (
          <PokemonCard pathname={pathname} pokemon={poke} />
        ))
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
