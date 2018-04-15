import React from 'react';
import { SignOut } from '../SignOut';
import { shallow } from 'enzyme';

describe('SignOut', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignOut />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
