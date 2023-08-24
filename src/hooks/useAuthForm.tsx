import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { signInApi, signUpApi } from '@/apis/auth';
import { isValidEmailInput, isValidPasswordInput } from '@/utils/auth/validate';
// import { useNavigate } from 'react-router-dom';

type FormInput = AuthPostRequest;

export type AuthPostRequest = {
  email: string;
  password: string;
};

const useAuthForm = (type: string) => {
  const [form, setForm] = useState<FormInput>({ email: '', password: '' });
  const [isValidForm, setIsValidForm] = useState(false);
  const debouncedEmail = useDebounce(form.email, 300);
  const debouncedPassword = useDebounce(form.password, 300);
  // const navigate = useNavigate();

  useEffect(() => {
    if (isValidEmailInput(debouncedEmail) && isValidPasswordInput(debouncedPassword)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [debouncedEmail, debouncedPassword]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof FormInput;
    const inputValue = e.target.value;

    setForm({ ...form, [inputName]: inputValue });
  };

  const onSubmit = async () => {
    setIsValidForm(false);
    if (type === 'signin') {
      try {
        const res = await signInApi(form);
        localStorage.setItem('access_token', res.data.access_token);
        // navigate('/todo');
      } catch (err: any | unknown) {
        alert(err.response.data.message);
        setIsValidForm(true);
      }
    }
    if (type === 'signup') {
      try {
        await signUpApi(form);
        alert('회원가입에 성공했습니다.');
        // navigate('/signin');
      } catch (err: any | unknown) {
        alert(err.response.data.message);
        setIsValidForm(true);
      }
    }
  };

  return [form, onInputChange, isValidForm, onSubmit] as const;
};

export default useAuthForm;
