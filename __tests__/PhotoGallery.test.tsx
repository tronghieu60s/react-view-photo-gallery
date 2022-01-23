import React from 'react';
import { mount, shallow } from 'enzyme';

import PhotoGallery, { PhotoGalleryProps } from '../dist/index';

const defaultProps: PhotoGalleryProps = {
  show: true,
  onShow: () => {},
  images: [
    { src: 'https://via.placeholder.com/500x500' },
    { src: 'https://via.placeholder.com/1000x1000', name: 'Amazing Name' },
    {
      src: 'https://via.placeholder.com/1200x1800',
      name: 'Amazing Name',
      caption: 'Amazing Caption',
    },
  ],
};

describe('<PhotoGallery />', () => {
  test('Render the component <PhotoGallery />', () => {
    expect(shallow(<PhotoGallery {...defaultProps} />)).toMatchSnapshot();
  });
  test('Count items in the component <PhotoGallery />', () => {
    const component = mount(<PhotoGallery {...defaultProps} />);
    expect(component.find('.gl-bg').length).toBe(1);
    expect(component.find('.gl-caption').length).toBe(1);
    expect(component.find('.gl-info').length).toBe(1);
    expect(component.find('.gl-navigation').length).toBe(1);
    expect(component.find('.gl-progress').length).toBe(1);
    expect(component.find('.gl-progress').length).toBe(1);
    expect(component.find('.gl-stage').length).toBe(1);
    expect(component.find('.gl-thumbs').length).toBe(1);
    expect(component.find('.gl-thumbs').length).toBe(1);
    expect(component.find('.gl-toolbar').length).toBe(1);
  });
  test('Info item in the component <PhotoGallery />', () => {
    const component = mount(<PhotoGallery {...defaultProps} />);
    /**
     * test show info of items,
     * click next and previous button for change value
     */
    expect(component.find('.gl-info').length).toBe(1);
    expect(component.find('.gl-info').text()).toEqual(`1 / 3`);
    component.find('.gl-navigation__right').simulate('click');
    expect(component.find('.gl-info').text()).toEqual(`2 / 3`);
    component.find('.gl-navigation__right').simulate('click');
    component.find('.gl-navigation__right').simulate('click');
    expect(component.find('.gl-info').text()).toEqual(`1 / 3`);
    component.find('.gl-navigation__left').simulate('click');
    expect(component.find('.gl-info').text()).toEqual(`3 / 3`);
    component.find('.gl-navigation__left').simulate('click');
    expect(component.find('.gl-info').text()).toEqual(`2 / 3`);
  });
  test('Caption item in the component <PhotoGallery />', () => {
    /**
     * test show caption of items,
     * click next and previous button for change value
     */
    const component = mount(<PhotoGallery {...defaultProps} />);
    expect(component.find('.gl-caption').length).toBe(1);
    expect(component.find('.gl-caption__body h4').text()).toEqual(`500x500`);
    component.find('.gl-navigation__right').simulate('click');
    expect(component.find('.gl-caption__body h4').text()).toEqual(`Amazing Name`);
    component.find('.gl-navigation__right').simulate('click');
    expect(component.find('.gl-caption__body h4').text()).toEqual(`Amazing Name`);
    expect(component.find('.gl-caption__body span').text()).toEqual(`Amazing Caption`);
  });
});
