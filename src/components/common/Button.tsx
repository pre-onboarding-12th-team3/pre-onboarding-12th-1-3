import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface CustomProps {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary';
}

interface Props extends Omit<ComponentPropsWithRef<'button'>, 'color'>, CustomProps {
  children: React.ReactNode;
}

const StyledButton = styled.button<CustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 0;
  padding: 10px 16px;
  font-weight: 700;

  & + & {
    margin-left: 0.3rem;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ size }) => {
    if (size === 'small') {
      return css`
        font-size: small;
      `;
    }
    if (size === 'default') {
      return css`
        font-size: medium;
      `;
    }
    if (size === 'large') {
      return css`
        font-size: large;
      `;
    }
  }}

  ${({ color }) => {
    if (color === 'primary') {
      return css`
        background-color: rgb(44, 91, 242);
        color: white;

        &:hover {
          background-color: rgb(67, 139, 255);
        }
      `;
    }
    if (color === 'secondary') {
      return css`
        background-color: #f2f4f7;
        color: #a4a4a5;

        &:hover {
          background-color: #e8e9ea;
        }
      `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: #f2f4f7;
        color: #cccccc;
        cursor: not-allowed;

        &:hover {
          background-color: #f2f4f7;
          color: #cccccc;
          cursor: not-allowed;
        }
      `;
    }
  }}
`;

const Button = (
  { size = 'default', color = 'primary', children, ...rest }: Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <StyledButton size={size} color={color} ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
