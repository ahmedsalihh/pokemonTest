import React from 'react';
import { shallow } from 'enzyme';
import PokeSearch from './index';

const customProps = {
  handleSearch: jest.fn(cb => cb(null, true)),
  handleClear: jest.fn(cb => cb(null, true)),
};

const setup = (props = { ...customProps }, state = null) => {
  const wrapper = shallow(<PokeSearch {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('PokeSearch Test', () => {
  const wrapper = setup();
  const pokeSearchComp = findByTestAttr(wrapper, 'component-poke-search');

  test('renders without crashing', () => {
    expect(pokeSearchComp.length).toBe(1);
  });

  test('has header class', () => {
    expect(pokeSearchComp.hasClass('searchForm')).toEqual(true);
  });
});
