import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'label'> {
  children: React.ReactNode;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Label = ({ children, ...rest }: Props, ref: Ref<HTMLLabelElement>) => {
  return (
    <StyledLabel ref={ref} {...rest}>
      {children}
    </StyledLabel>
  );
};

export default forwardRef(Label);
