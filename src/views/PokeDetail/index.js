import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import PokemonDetailCard from '../../components/PokemonDetailCard';

const PokeDetail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      setPokemon(res.data);
      setIsLoading(false);
    });
  }, [name]);

  return (
    <div className="container">
      {isLoading ? <div>loading...</div> : <PokemonDetailCard pokemon={pokemon} />}
    </div>
  );
};

export default PokeDetail;
