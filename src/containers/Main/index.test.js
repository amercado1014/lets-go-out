import React from "react";
import { Main } from "../Main";
import { shallow } from "enzyme";

describe("Main", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it("should math the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
