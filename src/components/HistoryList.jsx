import React from 'react';
import { useSelector } from 'react-redux';
import Card from './shared/Card';

const HistoryList = () => {
  const history = useSelector(({ location }) => location.searchHistory);
  return (
    <div className="history-list">
      <h3>Search Results &#8595;</h3>
      {
        !history.length && (
          <div>Your search results will be stored here</div>
        )
      }
      {
        !!history.length && history.map((location, index) => (
          <Card
            key={`${location.ip}-${index}`} // eslint-disable-line
            title={location.searchString}
            content={`${location.country_name} - ${location.city}`}
          />
        ))
      }
    </div>
  );
};

export default HistoryList;
