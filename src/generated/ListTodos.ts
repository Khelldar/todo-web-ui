/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TodoType } from "./globalTypes";

// ====================================================
// GraphQL query operation: ListTodos
// ====================================================

export interface ListTodos_listTodos_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string | null;
}

export interface ListTodos_listTodos {
  __typename: "Todo";
  id: string;
  text: string;
  createdBy: ListTodos_listTodos_createdBy;
  completed: boolean;
  type: TodoType | null;
}

export interface ListTodos {
  listTodos: ListTodos_listTodos[];
}
