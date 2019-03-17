/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TodoType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CompleteTodo
// ====================================================

export interface CompleteTodo_completeTodo_todo_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string | null;
}

export interface CompleteTodo_completeTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  createdBy: CompleteTodo_completeTodo_todo_createdBy;
  completed: boolean;
  type: TodoType | null;
}

export interface CompleteTodo_completeTodo {
  __typename: "CompleteTodoOutput";
  todo: CompleteTodo_completeTodo_todo;
}

export interface CompleteTodo {
  completeTodo: CompleteTodo_completeTodo;
}

export interface CompleteTodoVariables {
  id: string;
}
