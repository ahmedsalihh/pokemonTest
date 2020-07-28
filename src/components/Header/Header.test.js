import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Header {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('Header Test', () => {
  const wrapper = setup();
  const headerComp = findByTestAttr(wrapper, 'component-header');

  test('renders without crashing', () => {
    expect(headerComp.length).toBe(1);
  });

  test('has header class', () => {
    expect(headerComp.hasClass('header')).toEqual(true);
  });
});
