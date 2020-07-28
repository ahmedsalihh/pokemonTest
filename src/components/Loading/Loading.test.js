import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

import LoadingGif from '../../assets/img/loading.gif';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Loading {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('Loading Test', () => {
  const wrapper = setup();
  const loadingComp = findByTestAttr(wrapper, 'component-loading');

  test('renders without crashing', () => {
    expect(loadingComp.length).toBe(1);
  });

  test('correct img source', () => {
    expect(loadingComp.find('img').prop('src')).toEqual(LoadingGif);
  });
});
