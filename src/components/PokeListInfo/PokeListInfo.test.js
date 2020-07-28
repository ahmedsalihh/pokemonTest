import React from 'react';
import { shallow } from 'enzyme';
import PokeListInfo from './index';

const customProps = {
  count: 15,
  generation: 5,
};

const setup = (props = { ...customProps }, state = null) => {
  const wrapper = shallow(<PokeListInfo {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('PokeListInfo Test', () => {
  const wrapper = setup();
  const pokeListInfoComp = findByTestAttr(wrapper, 'component-poke-list-info');

  test('renders without crashing', () => {
    expect(pokeListInfoComp.length).toBe(1);
  });

  test('render info correctly according to props', () => {
    expect(pokeListInfoComp.find('h2').text()).toEqual(
      `Generation ${customProps.generation}`,
    );
    expect(pokeListInfoComp.find('h4').text()).toEqual(
      `${customProps.count} pokemons`,
    );
  });
});
