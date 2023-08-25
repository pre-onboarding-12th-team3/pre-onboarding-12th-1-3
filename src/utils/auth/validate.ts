const MIN_PASSWORD_LENGTH = 8;

export const isValidEmailInput = (email: string) => {
  return email.includes('@');
};
export const isValidPasswordInput = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};
