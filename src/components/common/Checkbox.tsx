import { ComponentPropsWithRef, Ref, forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends ComponentPropsWithRef<'input'> {}

const StyledCheckbox = styled.input`
  width: 1.1rem;
  height: 1.1rem;
`;

const Checkbox = ({ ...rest }: Props, ref: Ref<HTMLInputElement>) => {
  return <StyledCheckbox type="checkbox" ref={ref} {...rest} />;
};

export default forwardRef(Checkbox);
