import React from "react";
import { RestaurantsContainer, mapStateToProps } from "../RestaurantsContainer";
import { shallow } from "enzyme";
import { mockRestaurants } from "../../mockData/mockData";

describe("RestaurantsContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RestaurantsContainer 
      restaurants={mockRestaurants}
      favorites={mockRestaurants}
      locationStatus={false} />);
  });

  it("should math the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("correctly maps restaurants to props", () => {
    const restaurants = mockRestaurants;
    const expected = restaurants;
    const mockState = { restaurants };
    const mapped = mapStateToProps(mockState);
    expect(mapped.restaurants).toEqual(expected);
  });

  it('correctly maps locationStatus to props', () => {
    const locationStatus = false;
    const expected = locationStatus;
    const mockState = { locationStatus };
    const mapped = mapStateToProps(mockState);
    expect(mapped.locationStatus).toEqual(expected);
  });

  it('correctly maps favorites to props', () => {
    const favorites = mockRestaurants;
    const expected = favorites;
    const mockState = { favorites };
    const mapped = mapStateToProps(mockState);
    expect(mapped.favorites).toEqual(expected);
  });
});

