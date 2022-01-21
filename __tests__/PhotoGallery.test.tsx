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
  test("Render the component <PhotoGallery />", () => {
    expect(shallow(<PhotoGallery {...defaultProps} />)).toMatchSnapshot();
  });
  test("Count items in the component <PhotoGallery />", () => {
    const component = mount(<PhotoGallery {...defaultProps} />);
    expect(component.find(".gl-bg").length).toBe(1);
    expect(component.find(".gl-caption").length).toBe(1);
    expect(component.find(".gl-info").length).toBe(1);
    expect(component.find(".gl-navigation").length).toBe(1);
    expect(component.find(".gl-progress").length).toBe(1);
    expect(component.find(".gl-progress").length).toBe(1);
    expect(component.find(".gl-stage").length).toBe(1);
    expect(component.find(".gl-thumbs").length).toBe(1);
    expect(component.find(".gl-thumbs").length).toBe(1);
    expect(component.find(".gl-toolbar").length).toBe(1);
  });
  test("Info item in the component <PhotoGallery />", () => {
    const component = mount(<PhotoGallery {...defaultProps} />);
    /* Test show info of items,
     * Click next and previous button for change value */
    expect(component.find(".gl-info").length).toBe(1);
    expect(component.find(".gl-info").text()).toEqual(`1 / 3`);
    component.find(".gl-navigation__right").simulate("click");
    expect(component.find(".gl-info").text()).toEqual(`2 / 3`);
    component.find(".gl-navigation__right").simulate("click");
    component.find(".gl-navigation__right").simulate("click");
    expect(component.find(".gl-info").text()).toEqual(`1 / 3`);
    component.find(".gl-navigation__left").simulate("click");
    expect(component.find(".gl-info").text()).toEqual(`3 / 3`);
    component.find(".gl-navigation__left").simulate("click");
    expect(component.find(".gl-info").text()).toEqual(`2 / 3`);
  });
  test("Caption item in the component <PhotoGallery />", () => {
    const component = mount(<PhotoGallery {...defaultProps} />);
    expect(component.find(".gl-caption").length).toBe(1);
    expect(component.find(".gl-caption__body h4").text()).toEqual(`500x500`);
  });
});
