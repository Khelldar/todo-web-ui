/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TodoType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo_todo_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string | null;
}

export interface CreateTodo_createTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  createdBy: CreateTodo_createTodo_todo_createdBy;
  completed: boolean;
  type: TodoType | null;
}

export interface CreateTodo_createTodo {
  __typename: "CreateTodoOutput";
  todo: CreateTodo_createTodo_todo;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo;
}

export interface CreateTodoVariables {
  text: string;
}
