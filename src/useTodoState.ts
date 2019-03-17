import { useState, useEffect } from 'react';
import { todo } from './generated/todo';
import { service } from './service';

export default (initialValue: todo[]) => {
  const [todos, setTodos] = useState(initialValue);
  const [error, setError] = useState<any>(null);

  const getTodosFromServer = () => {
    service
      .ListTodos()
      .then(res => {
        if (res.errors) throw res.errors;

        setTodos(res.data.listTodos);
        setError(null);
      })
      .catch(setError);
  };

  useEffect(() => {
    getTodosFromServer();
    const interval = setInterval(getTodosFromServer, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    todos,
    error,
    createTodo: async (text: string) => {
      await service.CreateTodo({ text });
      getTodosFromServer();
    },
    completeTodo: async (id: string) => {
      await service.CompleteTodo({ id });
      getTodosFromServer();
    },
    deleteTodo: async (id: string) => {
      await service.DeleteTodo({ id });
      getTodosFromServer();
    },
  };
};
