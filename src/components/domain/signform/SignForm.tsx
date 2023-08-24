import styled from 'styled-components';

import { Button, Input } from '@/components/common';
import { useAuthForm } from '@/hooks';

export type FormType = 'signin' | 'signup';

type Props = {
  type: FormType;
};

const Form = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 512px;
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

const SignForm = ({ type }: Props) => {
  const [form, onInputChange, isValidForm, onSubmit] = useAuthForm(type);
  console.log(isValidForm);
  return (
    <Form>
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
