import axiosInstance from '../axiosInstance';
import { CreateTodoProps, DeleteTodoProps, TodoResponse, UpdateTodoProps } from '@/apis/todo';

const todoApi = {
  post: async ({ accessToken, todo }: CreateTodoProps) => {
    return await axiosInstance.post<TodoResponse>(
      '/todos',
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  get: async ({ accessToken }: CreateTodoProps) => {
    return await axiosInstance.get<TodoResponse[]>('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  put: async ({ accessToken, id, todo, isCompleted }: UpdateTodoProps) => {
    return await axiosInstance.put<TodoResponse>(
      `/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  },
  delete: async ({ accessToken, id }: DeleteTodoProps) => {
    return await axiosInstance.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default todoApi;
