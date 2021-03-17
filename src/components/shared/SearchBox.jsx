import React, { useState } from 'react';
import { string, func } from 'prop-types';

const SearchBox = ({ placeholder, btnText, onSearch }) => {
  const [searchString, setSearchString] = useState('');
  return (
    <div className="input-group mb-3 search-box">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={(evt) => setSearchString(evt)}
        aria-describedby="button-addon2"
      />
      <button
        onClick={() => onSearch(searchString)}
        className="btn btn-primary"
        type="submit"
        id="button-addon2"
      >
        {btnText}
      </button>
    </div>
  );
};

export default SearchBox;

SearchBox.defaultProps = {
  placeholder: 'Search',
  btnText: 'Search',
};

SearchBox.propTypes = {
  placeholder: string,
  btnText: string,
  onSearch: func.isRequired,
};
