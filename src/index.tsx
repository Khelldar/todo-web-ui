import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';
import { Error } from './error';

const App = () => {
  const { todos, createTodo, completeTodo, deleteTodo, error } = useTodoState([]);

  if (error) return <Error error={error} />;

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={text => {
          const trimmedText = text.trim();

          if (trimmedText.length > 0) {
            createTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
