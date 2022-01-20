import React from "react";
import { mount, shallow } from "enzyme";

import PhotoGallery, { ImageType } from "../dist/index";

const defaultProps: ImageType = {
  show: true,
  setShow: () => {},
  images: [
    { src: "https://via.placeholder.com/500x500" },
    { src: "https://via.placeholder.com/1000x1000" },
    { src: "https://via.placeholder.com/1200x1800" },
  ],
};

describe("<PhotoGallery />", () => {
  test("Renders the components <PhotoGallery />", () => {
    const wrapper = shallow(<PhotoGallery {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Find the components <PhotoGallery />", () => {
    expect(
      mount(<PhotoGallery {...defaultProps} />).find(".gl-info").length
    ).toBe(1);
  });
});
