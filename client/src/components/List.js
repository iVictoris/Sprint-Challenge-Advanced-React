import React from 'react';

const List = ({ children, className }) => {
  return <div className={`List ${className}`.trim()}>{children}</div>;
};

export default List;
