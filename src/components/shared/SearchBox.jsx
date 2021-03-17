import React, { useState } from 'react';
import { string, func } from 'prop-types';

const SearchBox = ({
  placeholder,
  btnText,
  onSearch,
  validate,
  validationMessage,
}) => {
  const [searchString, setSearchString] = useState('');
  const [isValid, setIsValid] = useState(true);
  return (
    <div className="input-group mb-3 search-box">
      <input
        type="text"
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        placeholder={placeholder}
        onChange={(evt) => setSearchString(evt.target.value)}
        onBlur={() => setIsValid(validate(searchString))}
        aria-describedby="button-addon2"
      />
      <button
        onClick={() => isValid && onSearch(searchString)}
        disabled={!searchString || !isValid}
        className="btn btn-primary"
        type="submit"
      >
        {btnText}
      </button>
      <div className="invalid-feedback">
        {validationMessage}
      </div>
    </div>
  );
};

export default SearchBox;

SearchBox.defaultProps = {
  placeholder: 'Search',
  btnText: 'Search',
  validate: () => true,
  validationMessage: 'Field has incorrect value',
};

SearchBox.propTypes = {
  placeholder: string,
  btnText: string,
  onSearch: func.isRequired,
  validationMessage: string,
  validate: func,
};
