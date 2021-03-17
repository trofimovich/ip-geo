import React from 'react';
import { string } from 'prop-types';

const Card = ({ title, content }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

export default Card;

Card.defaultProps = {
  title: 'Title',
  content: 'content',
};

Card.propTypes = {
  title: string,
  content: string,
};
