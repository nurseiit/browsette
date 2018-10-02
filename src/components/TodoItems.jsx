import React from 'react';
import { number, string, shape } from 'prop-types';

const TodoItems = (props) => {
  const { entries } = props;
  return (
    <ul>
      {
        entries.map(item => (
          <li key={item.key}>{item.text}</li>
        ))
      }
    </ul>
  );
};

TodoItems.propTypes = {
  entries: shape({
    key: number.isRequired,
    text: string.isRequired,
  }).isRequired,
};

export default TodoItems;
