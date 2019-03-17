import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { todo, todo_createdBy } from './generated/todo';

type User = todo_createdBy;

export const TodoList: React.FC<{
  todos: todo[];
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}> = ({ todos, completeTodo, deleteTodo }) => {
  const createdByText = (createdBy: User) => {
    return `${createdBy.firstName} ${createdBy.lastName || ''}`;
  };

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <Checkbox
            tabIndex={-1}
            disableRipple
            checked={todo.completed}
            onChange={(_e, checked) => {
              completeTodo(todo.id);
            }}
          />
          <ListItemText primary={todo.text} secondary={createdByText(todo.createdBy)} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
