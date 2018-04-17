import React from 'react';
import { SignOut, mapDispatchToProps } from '../SignOut';
import { shallow } from 'enzyme';
import { auth } from '../../firebase';
import * as actions from '../../actions';

describe('SignOut', () => {
  let wrapper;
  let mockResetFavorites;

  beforeEach(() => {
    mockResetFavorites = jest.fn();
    wrapper = shallow(<SignOut 
      resetFavorites={mockResetFavorites}/>);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call auth.signOut on handleClick', () => {
    auth.signOut = jest.fn();
    wrapper.instance().handleClick();
    expect(auth.signOut).toHaveBeenCalled();
  });

  it('should call resetFavorites on handleClick', () => {
    wrapper.instance().handleClick();
    expect(mockResetFavorites).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch on resetFavorites', () => {
    const mockDispatch = jest.fn();
    const expected = actions.resetFavorites();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.resetFavorites();
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
