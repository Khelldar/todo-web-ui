import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

export const TodoForm: React.FC<{ saveTodo: (text: string) => void }> = ({
  saveTodo,
}) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </form>
  );
};
