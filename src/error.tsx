import React from 'react';

export const Error: React.FC<{ error: any }> = ({ error }) => {
  return (
    <div>
      <h1>ERROR</h1>
      <code>{JSON.stringify(error)}</code>
    </div>
  );
};
