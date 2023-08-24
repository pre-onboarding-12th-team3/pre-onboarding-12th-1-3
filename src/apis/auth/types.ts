export interface Token {
  accessToken: string;
}

export interface AuthProps {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: Token['accessToken'];
}
