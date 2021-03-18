import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import MapMarker from '../../components/shared/MapMarker';

describe('Card', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <MapMarker />,
    );
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
