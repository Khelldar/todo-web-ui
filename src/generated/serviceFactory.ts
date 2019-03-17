/* tslint:disable */
// This file was automatically generated and should not be edited.
import ApolloClient, { QueryOptions, MutationOptions } from 'apollo-client';
import gql from 'graphql-tag';

import { ListTodos } from './ListTodos'
import { CreateTodo, CreateTodoVariables } from './CreateTodo'
import { CompleteTodo, CompleteTodoVariables } from './CompleteTodo'
import { DeleteTodo, DeleteTodoVariables } from './DeleteTodo'

//can be removed if this bug is fixed:
//https://github.com/apollographql/apollo-client/issues/2795
import { ExecutionResult } from 'graphql';
declare module 'apollo-link' {
  export type FetchResult<
    TData = { [key: string]: any },
    C = Record<string, any>,
    E = Record<string, any>
  > = ExecutionResult<TData> & {
    extensions?: E;
    context?: C;
  };
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export function createService(client: ApolloClient<any>) {
  return {
    
    ListTodos: ( options: Omit<QueryOptions, 'query' | 'variables'> = {}) => {
      return client.query<ListTodos>({
        ...options,
        query: ListTodosQuery,
        
      });
    },
    watchListTodos: ( options: Omit<QueryOptions, 'query' | 'variables'> = {}) => {
      return client.watchQuery<ListTodos>({
        ...options,
        query: ListTodosQuery,
        
      });
    },

    
    CreateTodo: (variables: CreateTodoVariables, options: Omit<MutationOptions<CreateTodo, CreateTodoVariables>, 'mutation' | 'variables'> = {}) => {
      return client.mutate<CreateTodo, CreateTodoVariables>({
        ...options,
        mutation: CreateTodoMutation,
        variables
      });
    },

    CompleteTodo: (variables: CompleteTodoVariables, options: Omit<MutationOptions<CompleteTodo, CompleteTodoVariables>, 'mutation' | 'variables'> = {}) => {
      return client.mutate<CompleteTodo, CompleteTodoVariables>({
        ...options,
        mutation: CompleteTodoMutation,
        variables
      });
    },

    DeleteTodo: (variables: DeleteTodoVariables, options: Omit<MutationOptions<DeleteTodo, DeleteTodoVariables>, 'mutation' | 'variables'> = {}) => {
      return client.mutate<DeleteTodo, DeleteTodoVariables>({
        ...options,
        mutation: DeleteTodoMutation,
        variables
      });
    },
  
  }
}


  export const ListTodosQuery = gql`fragment todo on Todo{__typename completed createdBy{__typename firstName lastName}id text type}query ListTodos{listTodos{__typename...todo}}`
  
  export const CreateTodoMutation = gql`fragment todo on Todo{__typename completed createdBy{__typename firstName lastName}id text type}mutation CreateTodo($text:String!){createTodo(input:{text:$text}){__typename todo{__typename...todo}}}`
  
  export const CompleteTodoMutation = gql`fragment todo on Todo{__typename completed createdBy{__typename firstName lastName}id text type}mutation CompleteTodo($id:ID!){completeTodo(input:{id:$id}){__typename todo{__typename...todo}}}`
  
  export const DeleteTodoMutation = gql`mutation DeleteTodo($id:ID!){deleteTodo(input:{id:$id}){__typename id}}`