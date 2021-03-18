import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import SearchBox from '../../components/shared/SearchBox';

const noop = () => {};

describe('SearchBox', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <SearchBox onSearch={noop} />,
    );
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Renders correctly with params', () => {
    const wrapper = shallow(
      <SearchBox
        onSearch={noop}
        placeholder="Enter some...."
        btnText="Test"
        validationMessage="Some validation message"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should provide searchString to callback after search button was pressed', () => {
    const onSearch = jest.fn();

    const wrapper = mount(<SearchBox onSearch={onSearch} />);
    const searchInput = wrapper.find('input.form-control');
    searchInput.simulate('change', { target: { value: 'habr.com' }});

    const searchButton = wrapper.find('button');
    searchButton.simulate('click');

    expect(onSearch).toHaveBeenCalledWith('habr.com');

    wrapper.unmount();
  });

  it('Should invoke validate function', () => {
    const validate = jest.fn();

    const wrapper = mount(<SearchBox onSearch={noop} validate={validate} />);
    const searchInput = wrapper.find('input.form-control');
    searchInput.simulate('change', { target: { value: '1.1.1.1' }});
    searchInput.simulate('blur');
    expect(validate).toHaveBeenCalledWith('1.1.1.1');

    wrapper.unmount();
  })
});
