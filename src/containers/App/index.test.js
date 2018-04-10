import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';
import { fetchLocation } from '../../api/apiCalls/fetchLocation';
import { fetchRestaurantsByLocation 
} from '../../api/apiCalls/fetchRestaurantsByLocation';
import { restaurantsCleaner } from '../../api/helpers/restaurantsCleaner';

jest.mock('../../api/apiCalls/fetchLocation');
jest.mock('../../api/apiCalls/fetchRestaurantsByLocation');
jest.mock('../../api/helpers/restaurantsCleaner');

describe('App', () => {
  let wrapper;
  let mockAddRestaurants;

  beforeEach(() => {
    mockAddRestaurants = jest.fn();
    wrapper = shallow(<App addRestaurants={mockAddRestaurants} />);
  });

  it('should math the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchLocation on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(fetchLocation).toHaveBeenCalled();
  });

  it('should call fetchRestaurantsByLocation on componentDidMount', () => { 
    wrapper.instance().componentDidMount();
    expect(fetchRestaurantsByLocation).toHaveBeenCalled();
  });

  it('should call restaurantsCleaner on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(restaurantsCleaner).toHaveBeenCalled();
  });

  it.skip('should call addRestaurants on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(mockAddRestaurants).toHaveBeenCalled();
  });
});