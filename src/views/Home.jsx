import React from 'react';
import { useDispatch } from 'react-redux';

import HistoryList from '../components/HistoryList';
import SearchBox from '../components/shared/SearchBox';
import SearchInfo from '../components/SearchInfo';
import UserInfo from '../components/UserInfo';

import { findLocation } from '../actions/location';
import validators from '../utils/validators';

const Home = () => {
  const dispatch = useDispatch();
  const validateSearch = (val) => validators.ip(val) || validators.url(val);
  return (
    <div className="container-fluid-md container-lg app-view">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <HistoryList />
        </div>
        <div className="col-lg-9 col-md-12">
          <h4>Your location &#8595;</h4>
          <div className="info-container">
            <UserInfo />
          </div>
          <div className="searchbox-container">
            <h4>Check location by IP or URL &#8595;</h4>
            <SearchBox
              onSearch={(searchString) => dispatch(findLocation(searchString))}
              validate={validateSearch}
              validationMessage="Field should contain IP or URL address."
            />
          </div>
          <div className="info-container">
            <SearchInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
