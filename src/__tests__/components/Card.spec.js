import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Card from '../../components/shared/Card';

describe('Card', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <Card />,
    );
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Renders correctly with params', () => {
    const wrapper = shallow(
      <Card
        title="ABCD"
        contend="abcdefghijklmn"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Renders loader when "isLoading" param is passed', () => {
    const wrapper = shallow(
      <Card
        isLoading
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
