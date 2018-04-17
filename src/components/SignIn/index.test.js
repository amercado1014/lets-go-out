import React from 'react';
import { SignIn } from '../SignIn';
import { shallow } from 'enzyme';
import { auth } from '../../firebase';
import * as routes from "../../constants/routes";

describe('SignIn', () => {
  let wrapper;
  const mockHistory = { push: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<SignIn history={mockHistory}/>);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default', () => {
    expect(wrapper.state()).toEqual({
      email: '',
      password: '',
      error: null
    });
  });

  it('should update state when handle change is called', () => {
    const mockEvent = { target: { value: 'password', name: 'password' } };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual('password');
  });

  it('should call signIn on handleSubmit with correct params', () => {
    const mockEvent = { preventDefault: jest.fn() };
    auth.signIn = jest.fn();
    wrapper.setState({
      email: 'jim@gmail.com',
      password: 'password'
    });
    const { email, password } = wrapper.state();
    wrapper.instance().handleSubmit(mockEvent);
    expect(auth.signIn).toHaveBeenCalledWith(email, password);
  });

  it('should call history.push with correct params on handleSubmit', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockHistory.push).toHaveBeenCalledWith(routes.HOME);
  });

  it('should set state with error if signIn returns an error', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    auth.signIn = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: 'Error'
      })
    );
    await wrapper.instance().handleSubmit(mockEvent);
    await expect(wrapper.state('error')).toEqual('Error');
  });
});
