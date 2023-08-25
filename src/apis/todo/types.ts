import { Token } from '@/apis/auth';

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface GetTodoProps extends Token {}

export interface CreateTodoProps extends Token, Pick<Todo, 'todo'> {}

export interface UpdateTodoProps extends Token, Omit<Todo, 'userId'> {}

export interface DeleteTodoProps extends Token, Pick<Todo, 'id'> {}

export interface TodoResponse extends Todo {}
