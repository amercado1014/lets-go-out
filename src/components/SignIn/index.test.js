import React from 'react';
import SignIn from '../SignIn';
import { shallow } from 'enzyme';

describe('SignIn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
