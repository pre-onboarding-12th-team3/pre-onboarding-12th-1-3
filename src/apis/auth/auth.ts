import { axiosInstance } from '@/apis';
import { AuthProps, SignInResponse } from '@/apis/auth';

const signUpApi = async ({ email, password }: AuthProps) => {
  return await axiosInstance.post('/auth/signup', { email, password });
};
const signInApi = async ({ email, password }: AuthProps) => {
  return await axiosInstance.post<SignInResponse>('/auth/signin', { email, password });
};

export { signUpApi, signInApi };
