import React from 'react';
import { func, string } from 'prop-types';

import '../styles/Square.css';

const Square = (props) => {
  const { value, handleClicks } = props;
  return (
    <button
      type="button"
      className="square"
      onClick={handleClicks.bind(this)}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: string,
  handleClicks: func.isRequired,
};
Square.defaultProps = {
  value: null,
};

export default Square;
