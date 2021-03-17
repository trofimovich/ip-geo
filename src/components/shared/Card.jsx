import React from 'react';
import { bool, string } from 'prop-types';

const Card = ({ title, content, isLoading }) => (
  <div className="card">
    <div className="card-body">
      {
        isLoading && (
          <div className="spinner-border text-primary" role="status" />
        )
      }
      {
        !isLoading && (
          <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
          </>
        )
      }
    </div>
  </div>
);

export default Card;

Card.defaultProps = {
  title: 'Title',
  content: 'content',
  isLoading: false,
};

Card.propTypes = {
  title: string,
  content: string,
  isLoading: bool,
};
