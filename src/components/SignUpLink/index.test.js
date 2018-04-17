import React from 'react';
import { SignUpLink } from '../SignUpLink';
import { shallow } from 'enzyme';

describe('SignUpLink', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpLink />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

