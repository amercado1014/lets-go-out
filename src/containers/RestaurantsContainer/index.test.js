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

  it('should map restaurants to the store', () => {
    const mockStore = { restaurants: mockRestaurants };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });
});
