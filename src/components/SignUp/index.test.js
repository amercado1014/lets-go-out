import React from 'react';
import { SignUp } from '../SignUp';
import { shallow } from 'enzyme';
import { auth } from '../../firebase';

describe('SignUp', () => {
  let wrapper;
  const mockHistory = { push: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<SignUp history={mockHistory} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    });
  });

  it('should update state when handle change is called', () => {
    const mockEvent = { target: { value: 'password', name: 'password' } };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual('password');
  });

  it('should call signUp on handleSubmit with correct params', () => {
    const mockEvent = { preventDefault: jest.fn() };
    auth.signUp = jest.fn();
    wrapper.setState({
      email: 'jim@gmail.com',
      passwordOne: 'password'
    });
    const { email, passwordOne } = wrapper.state();
    wrapper.instance().handleSubmit(mockEvent);
    expect(auth.signUp).toHaveBeenCalledWith(email, passwordOne);
  });

  it('should call history.push with correct params on handleSubmit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });

  it('should set state with error if signUp returns an error', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    auth.signUp = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: 'Error'
      })
    );
    await wrapper.instance().handleSubmit(mockEvent);
    await expect(wrapper.state('error')).toEqual('Error');
  });
});
