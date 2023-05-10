import React from 'react';
import './Star.css';

const Star = ({ filled }) => {
  const fillStyle = filled ? { color: '#FFD700' } : {};

  return (
    <span className="Star" style={fillStyle}>
      &#9733;
    </span>
  );
};

const StarRating = ({ numStars, rating }) => {
  const filledStars = Math.round(rating * (numStars / 5));
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const filled = i < filledStars;
    stars.push(<Star key={i} filled={filled} />);
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default StarRating;
