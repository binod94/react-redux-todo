import React from 'react';

const List = ({ data }) => (
  <ul>
    {data.map(data =>
      <li key={data.text}>{data.text}</li>
    )}
  </ul>
);
export default List;
