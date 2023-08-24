import axiosInstance from './axiosInstance';

interface AuthProps {
  email: string;
  password: string;
}
interface SignInResponse {
  access_token: string;
}

const signUpApi = async ({ email, password }: AuthProps) => {
  return await axiosInstance.post('/auth/signup', { email, password });
};
const signInApi = async ({ email, password }: AuthProps) => {
  return await axiosInstance.post<SignInResponse>('/auth/signin', { email, password });
};

export { signUpApi, signInApi };
