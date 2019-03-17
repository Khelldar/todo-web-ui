import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (value: string) => {
      setValue(value);
    },
    reset: () => setValue(''),
  };
};
