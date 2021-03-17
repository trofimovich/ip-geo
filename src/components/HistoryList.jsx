import React from 'react';
import Card from './shared/Card';

const HistoryList = () => {
  return (
    <div className="history-list">
      <h3>Search Results &#8595;</h3>
      <Card
        title="Card #1"
        content="Country - City"
      />
      <Card
        title="Card #2"
        content="Country - City"
      />
    </div>
  );
};

export default HistoryList;
