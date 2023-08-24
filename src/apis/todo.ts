import axiosInstance from './axiosInstance';

interface AccessTokenType {
  accessToken: string;
}
interface CreateTodoProps extends AccessTokenType {
  todo: string;
}
interface UpdateTodoProps extends AccessTokenType {
  id: string;
  todo: string;
  isCompleted: boolean;
}
interface DeleteTodoProps extends AccessTokenType {
  id: string;
}
interface TodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

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
