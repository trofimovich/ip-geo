import React from 'react';
import { useDispatch } from 'react-redux';

import HistoryList from '../components/HistoryList';
import SearchBox from '../components/shared/SearchBox';
import SearchInfo from '../components/SearchInfo';
import UserInfo from '../components/UserInfo';

import { findLocation } from '../actions/location';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container app-view">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <HistoryList />
        </div>
        <div className="col-md-9 col-sm-12">
          <h4>Your location &#8595;</h4>
          <div className="info-container">
            <UserInfo />
          </div>
          <div className="searchbox-container">
            <h4>Check location by IP or URL &#8595;</h4>
            <SearchBox onSearch={(searchString) => dispatch(findLocation(searchString))} />
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
