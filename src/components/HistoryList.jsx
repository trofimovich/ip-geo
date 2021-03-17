import React from 'react';
import { useSelector } from 'react-redux';
import Card from './shared/Card';

const HistoryList = () => {
  const history = useSelector(({ searchHistory }) => searchHistory);
  return (
    <div className="history-list">
      <h3>Search Results &#8595;</h3>
      {
        history.map((location) => (
          <Card
            key={`${location.ip}-${location.searchString}`}
            title={location.searchString}
            content={`${location.country_name} - ${location.city}`}
          />
        ))
      }
    </div>
  );
};

export default HistoryList;
