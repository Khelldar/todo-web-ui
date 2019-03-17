/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TodoType } from "./globalTypes";

// ====================================================
// GraphQL fragment: todo
// ====================================================

export interface todo_createdBy {
  __typename: "User";
  firstName: string;
  lastName: string;
}

export interface todo {
  __typename: "Todo";
  id: string;
  text: string;
  createdBy: todo_createdBy;
  completed: boolean;
  type: TodoType | null;
}
