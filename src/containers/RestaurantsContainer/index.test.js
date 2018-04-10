import React from "react";
import { RestaurantsContainer } from "../RestaurantsContainer";
import { shallow } from "enzyme";
import { mockRestaurants } from "../../mockData/mockData";

describe("RestaurantsContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RestaurantsContainer restaurants={mockRestaurants}/>);
  });

  it("should math the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
