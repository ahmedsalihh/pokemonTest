import React from 'react';
import { shallow } from 'enzyme';
import PokemonCard from './index';

const customProps = {
  pokemon: { name: 'test' },
  pathname: '/pokemon',
};

const setup = (props = { ...customProps }, state = null) => {
  const wrapper = shallow(<PokemonCard {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('PokemonCard Test', () => {
  const wrapper = setup();
  const pokemonCardComp = findByTestAttr(wrapper, 'component-pokemon-card');

  test('renders without crashing', () => {
    expect(pokemonCardComp.length).toBe(1);
  });

  test('has pokemon-card class', () => {
    const pokeCardDiv = pokemonCardComp.find('div').at(1);
    expect(pokeCardDiv.hasClass('pokemon-card')).toEqual(true);
  });
});
