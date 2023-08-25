import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@/components/common';
import { useDebounceFunc } from '@/hooks';
import { signInApi, signUpApi } from '@/apis/auth';

type Props = {
  type: 'signin' | 'signup';
};

type FormInput = {
  email: string;
  password: string;
};

const MIN_PASSWORD_LENGTH = 8;

const isValidEmailInput = (email: string) => {
  return email.includes('@');
};
const isValidPasswordInput = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

const SignForm = ({ type }: Props) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isValidForm, setIsValidForm] = useState(false);
  const navigate = useNavigate();

  const validateForm = (updatedForm: FormInput) => {
    if (isValidEmailInput(updatedForm.email) && isValidPasswordInput(updatedForm.password)) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  };

  const handleDebouncedValidation = useDebounceFunc(validateForm, 300);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    const updatedForm = { ...form, [inputName]: inputValue };

    setForm(updatedForm);
    handleDebouncedValidation(updatedForm);
  };

  const onSubmit = async () => {
    setIsValidForm(false);
    if (type === 'signin') {
      try {
        const res = await signInApi(form);
        localStorage.setItem('access_token', res.data.access_token);
        navigate('/todo');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        alert(err.response.data.message);
        setIsValidForm(true);
      }
    }
    if (type === 'signup') {
      try {
        await signUpApi(form);
        alert('회원가입에 성공했습니다.');
        navigate('/signin');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        alert(err.response.data.message);
        setIsValidForm(true);
      }
    }
  };

  return (
    <Form>
      <Title>{FORM_DETAILS[type].BUTTON_LABEL}</Title>
      <Input
        data-testid="email-input"
        type="email"
        name="email"
        value={form.email}
        onChange={onInputChange}
        placeholder="이메일을 입력하세요."
      />
      <Input
        data-testid="password-input"
        type="password"
        name="password"
        value={form.password}
        onChange={onInputChange}
        placeholder="비밀번호를 입력하세요."
      />
      <Button
        data-testid={FORM_DETAILS[type].BUTTON_ID}
        type="submit"
        disabled={!isValidForm}
        onClick={onSubmit}
      >
        {FORM_DETAILS[type].BUTTON_LABEL}
      </Button>
    </Form>
  );
};

export default SignForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 512px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 24px;
`;
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;
const FORM_DETAILS = {
  signin: {
    BUTTON_LABEL: '로그인',
    BUTTON_ID: 'signin-button',
  },
  signup: {
    BUTTON_LABEL: '회원가입',
    BUTTON_ID: 'signup-button',
  },
};
