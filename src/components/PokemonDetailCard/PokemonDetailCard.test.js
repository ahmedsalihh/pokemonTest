import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetailCard from './index';

const customProps = {
  pokemon: {
    name: 'test',
    id: 1,
    height: 15,
    types: [{ type: { name: 'type' } }],
    abilities: [{ ability: { name: 'a1' } }, { ability: { name: 'a2' } }],
  },
};

const setup = (props = { ...customProps }, state = null) => {
  const wrapper = shallow(<PokemonDetailCard {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('PokemonDetailCard Test', () => {
  const wrapper = setup();
  const pokemonDetailCardComp = findByTestAttr(
    wrapper,
    'component-pokemon-detail-card',
  );

  test('renders without crashing', () => {
    expect(pokemonDetailCardComp.length).toBe(1);
  });

  test('has header class', () => {
    expect(pokemonDetailCardComp.hasClass('detail-card')).toEqual(true);
  });

  test('has correct values', () => {
    const specsDiv = pokemonDetailCardComp.find('div').at(1);
    expect(pokemonDetailCardComp.find('img').prop('alt')).toEqual('test');
    expect(specsDiv.find('span').at(0).text()).toEqual('1');
    expect(specsDiv.find('span').at(1).text()).toEqual('type');
    expect(specsDiv.find('span').at(2).text()).toEqual('15');
    expect(specsDiv.find('li').length).toEqual(2);
  });
});
