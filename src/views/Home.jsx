import React from 'react';

import HistoryList from '../components/HistoryList';
import SearchBox from '../components/shared/SearchBox';
import SearchInfo from '../components/SearchInfo';
import UserInfo from '../components/UserInfo';

const Home = () => {
  return (
    <div className="container app-view">
      <div className="row">
        <div className="col-3">
          <HistoryList />
        </div>
        <div className="col-9">
          <div className="info-container">
            <UserInfo />
          </div>
          <h4>Find location by IP or URL &#8595;</h4>
          <SearchBox />
          <div className="info-container">
            <SearchInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
